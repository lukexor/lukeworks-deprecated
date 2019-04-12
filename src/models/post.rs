#![allow(clippy::cast_possible_truncation, clippy::cast_precision_loss)]

use crate::models::{account::Account, category::Category};
use crate::schema::post;
use chrono::prelude::*;
use diesel::prelude::*;
use post::table as posts;
use serde::{Deserialize, Serialize};

#[derive(
    Queryable,
    Identifiable,
    AsChangeset,
    Serialize,
    Deserialize,
    Associations,
    Eq,
    PartialEq,
    Debug,
    Clone,
)]
#[table_name = "post"]
#[changeset_options(treat_none_as_null = "true")]
#[belongs_to(Account, foreign_key = "author_id")]
#[belongs_to(Category)]
pub struct Post {
    pub id: i32,
    pub title: String,
    pub body: String,
    pub category_id: i32,
    pub author_id: i32,
    pub parent_id: Option<i32>,
    pub minutes_to_read: i16,
    pub published: bool,
    pub published_at: Option<NaiveDateTime>,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Insertable, Serialize, Deserialize, Eq, PartialEq, Debug, Clone)]
#[table_name = "post"]
pub struct Insert {
    pub title: String,
    pub body: String,
    pub category_id: i32,
    pub author_id: i32,
    pub parent_id: Option<i32>,
    pub minutes_to_read: i16,
}

impl Post {
    pub fn new(id: i32, title: &str, body: &str, category_id: i32, author_id: i32) -> Self {
        let now = Utc::now().naive_utc();
        Self {
            id,
            title: title.to_string(),
            body: body.to_string(),
            category_id,
            author_id,
            parent_id: None,
            minutes_to_read: Self::calc_minutes_to_read(body),
            published: false,
            published_at: None,
            created_at: now,
            updated_at: now,
        }
    }

    fn with_parent(mut self, parent_id: i32) -> Self {
        self.parent_id = Some(parent_id);
        self
    }

    // Associated methods

    pub fn create(conn: &diesel::PgConnection, post: &Insert) -> QueryResult<Self> {
        diesel::insert_into(posts)
            .values(post)
            .get_result::<Self>(conn)
    }

    pub fn update(conn: &diesel::PgConnection, post: &Self) -> QueryResult<Self> {
        diesel::update(posts.find(post.id))
            .set(post)
            .get_result::<Self>(conn)
    }

    pub fn get(conn: &diesel::PgConnection, id: i32) -> QueryResult<Self> {
        posts.find(id).first::<Self>(conn)
    }

    pub fn list(conn: &diesel::PgConnection) -> QueryResult<Vec<Self>> {
        posts.load::<Self>(conn)
    }

    pub fn delete(conn: &diesel::PgConnection, id: i32) -> QueryResult<usize> {
        diesel::delete(posts.find(id)).execute(conn)
    }

    fn calc_minutes_to_read(body: &str) -> i16 {
        let avg_wpm_reading_speed = 200;
        let words = body.split_whitespace().collect::<Vec<&str>>();
        let minutes = words.len() / avg_wpm_reading_speed;
        math::round::ceil(minutes as f64, 0) as i16
    }
}

impl Insert {
    pub fn new(title: &str, body: &str, category_id: i32, author_id: i32) -> Self {
        Self {
            title: title.to_string(),
            body: body.to_string(),
            category_id,
            author_id,
            parent_id: None,
            minutes_to_read: Post::calc_minutes_to_read(body),
        }
    }

    fn with_parent(mut self, parent_id: i32) -> Self {
        self.parent_id = Some(parent_id);
        self
    }
}

#[cfg(all(test, not(feature = "database")))]
mod tests {
    use super::*;

    #[test]
    fn post_with_parent() {
        let parent_id = 1;
        let post = Post::new(2, "Test Post", "Test Content", 1, 1).with_parent(parent_id);
        assert_eq!(Some(parent_id), post.parent_id);
    }

    #[test]
    fn insert_with_parent() {
        let parent_id = 1;
        let post = Insert::new("Test Post", "Test Content", 1, 1).with_parent(parent_id);
        assert_eq!(Some(parent_id), post.parent_id);
    }
}

#[cfg(all(test, feature = "database"))]
mod post_tests {
    use super::*;
    use crate::db::test::connection;
    use crate::models::{account, category};
    use fake::*;

    fn setup(conn: &diesel::PgConnection) {
        let email = fake!(Internet.safe_email);
        let full_name = fake!(Name.name);
        let new_account = account::Insert::new(&email, &full_name);
        account::Account::create(&conn, &new_account).expect("valid account");

        let name = fake!(Name.name);
        let new_category = category::Insert::new(&name);
        category::Category::create(&conn, &new_category).expect("valid category");
    }

    fn new_post(conn: &diesel::PgConnection) -> Insert {
        let title = fake!(Lorem.sentence(2, 5));
        let body = fake!(Lorem.paragraph(5, 5));
        let category_id = Category::list(conn).unwrap().first().unwrap().id;
        let author_id = Account::list(conn).unwrap().first().unwrap().id;
        Insert::new(&title, &body, category_id, author_id)
    }

    #[test]
    fn create() {
        let conn = connection();
        setup(&conn);
        let new_post = new_post(&conn);
        let actual_post = Post::create(&conn, &new_post).unwrap();
        let mut expected_post = Post::new(
            actual_post.id,
            &new_post.title,
            &new_post.body,
            new_post.category_id,
            new_post.author_id,
        );
        expected_post.created_at = actual_post.created_at;
        expected_post.updated_at = actual_post.updated_at;
        assert_eq!(expected_post, actual_post);
    }

    #[test]
    fn update() {
        let conn = connection();
        setup(&conn);
        let mut post = create_test_post(&conn);
        post.title = "Updated Post".to_string();
        let updated_post = Post::update(&conn, &post).unwrap();
        assert_eq!(post.title, updated_post.title);
    }

    #[test]
    fn get_doesnt_exist() {
        let conn = connection();
        let result = Post::get(&conn, 1);
        assert!(result.is_err());
        assert_eq!(diesel::result::Error::NotFound, result.err().unwrap());
    }

    #[test]
    fn get_exists() {
        let conn = connection();
        setup(&conn);
        let expected_post = create_test_post(&conn);
        let actual_post = Post::get(&conn, expected_post.id).unwrap();
        assert_eq!(expected_post, actual_post);
    }

    #[test]
    fn list_zero() {
        let conn = connection();
        setup(&conn);
        let post_list = Post::list(&conn).unwrap();
        assert!(post_list.is_empty());
    }

    #[test]
    fn list_one() {
        let conn = connection();
        setup(&conn);
        let expected_post = create_test_post(&conn);
        let post_list = Post::list(&conn).unwrap();
        assert_eq!(1, post_list.len());
        assert_eq!(expected_post, post_list[0]);
    }

    #[test]
    fn list_multiple() {
        let conn = connection();
        setup(&conn);
        let expected_post1 = create_test_post(&conn);
        let expected_post2 = create_test_post(&conn);
        let post_list = Post::list(&conn).unwrap();
        assert_eq!(2, post_list.len());
        assert_eq!(expected_post1, post_list[0]);
        assert_eq!(expected_post2, post_list[1]);
    }

    #[test]
    fn delete_doesnt_exist() {
        let conn = connection();
        setup(&conn);
        let delete_count = Post::delete(&conn, 1).unwrap();
        assert_eq!(0, delete_count);
    }

    #[test]
    fn delete_exists() {
        let conn = connection();
        setup(&conn);
        let post = create_test_post(&conn);
        let delete_count = Post::delete(&conn, post.id).unwrap();
        assert_eq!(1, delete_count);
    }

    fn create_test_post(conn: &diesel::PgConnection) -> Post {
        Post::create(&conn, &new_post(conn)).unwrap()
    }
}
