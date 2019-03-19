#![allow(clippy::cast_possible_truncation, clippy::cast_precision_loss)]
use crate::{schema::post, schema::post::table as posts, DbConn};
use chrono::prelude::*;
use diesel::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(
    PartialEq,
    Eq,
    Debug,
    Clone,
    Queryable,
    Insertable,
    Identifiable,
    AsChangeset,
    Serialize,
    Deserialize,
)]
#[table_name = "post"]
pub struct Post {
    pub id: Option<i32>,
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

impl Post {
    pub fn new(id: Option<i32>, title: &str, body: &str, category_id: i32, author_id: i32) -> Self {
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

    pub fn create(&self, conn: &DbConn) -> QueryResult<Self> {
        diesel::insert_into(posts)
            .values(self)
            .get_result::<Self>(&**conn)
    }

    pub fn update(&self, conn: &DbConn) -> QueryResult<Self> {
        diesel::update(posts.find(self.id))
            .set(self)
            .get_result::<Self>(&**conn)
    }

    pub fn get(id: i32, conn: &DbConn) -> QueryResult<Self> {
        posts.find(id).first::<Self>(&**conn)
    }

    pub fn read(conn: &DbConn) -> QueryResult<Vec<Self>> {
        posts.load::<Self>(&**conn)
    }

    pub fn delete(id: i32, conn: &DbConn) -> QueryResult<usize> {
        diesel::delete(posts.find(id)).execute(&**conn)
    }

    fn calc_minutes_to_read(body: &str) -> i16 {
        let avg_wpm_reading_speed = 200;
        let words = body.split_whitespace().collect::<Vec<&str>>();
        let minutes = words.len() / avg_wpm_reading_speed;
        math::round::ceil(minutes as f64, 0) as i16
    }
}

#[cfg(feature = "database")]
#[cfg(test)]
mod post_tests {
    use crate::db::test::connection;
    use crate::models::{account::*, category::*, post::*};
    use bcrypt::{hash, DEFAULT_COST};
    use fake::*;

    fn setup(conn: &DbConn) {
        let email = fake!(Internet.safe_email);
        let full_name = fake!(Name.name);
        let password = hash(fake!(Company.buzzword), DEFAULT_COST).unwrap();
        let new_account = Account::new(&email, &full_name, &password);
        new_account.create(&conn).expect("valid account");

        let name = fake!(Name.name);
        let new_category = Category::new(&name);
        new_category.create(&conn).expect("valid category");
    }

    fn new_post(conn: &DbConn) -> Post {
        let title = fake!(Lorem.sentence(2, 5));
        let body = fake!(Lorem.paragraph(5, 5));
        let category_id = Category::read(conn).unwrap().first().unwrap().id;
        let author_id = Account::read(conn).unwrap().first().unwrap().id;
        Post::new(&title, &body, category_id, author_id)
    }

    #[test]
    fn create() {
        let conn = connection();
        setup(&conn);
        let new_post = new_post(&conn);
        let actual_post = new_post.create(&conn).unwrap();
        let expected_post = Post {
            id: actual_post.id,
            title: new_post.title.clone(),
            body: new_post.body.clone(),
            category_id: Category::read(&conn).unwrap().first().unwrap().id,
            author_id: Account::read(&conn).unwrap().first().unwrap().id,
            parent_id: None,
            minutes_to_read: Post::calc_minutes_to_read(&new_post.body),
            published: false,
            published_at: None,
            created_at: actual_post.created_at,
            updated_at: actual_post.updated_at,
        };
        assert_eq!(expected_post, actual_post);
    }

    #[test]
    fn update() {
        let conn = connection();
        setup(&conn);
        let new_post = new_post(&conn);
        let mut post = new_post.create(&conn).unwrap();
        let new_title = "Updated Post";
        post.title = new_title.into();
        let updated_post = post.update(&conn).unwrap();
        assert_eq!(new_title, updated_post.title);
    }

    #[test]
    fn get_doesnt_exist() {
        let conn = connection();
        setup(&conn);
        let result = Post::get(1, &conn);
        assert!(result.is_err());
        assert_eq!(diesel::result::Error::NotFound, result.err().unwrap());
    }

    #[test]
    fn get_exists() {
        let conn = connection();
        setup(&conn);
        let new_post = new_post(&conn);
        let expected_post = new_post.create(&conn).unwrap();
        let actual_post = Post::get(expected_post.id, &conn).unwrap();
        assert_eq!(expected_post, actual_post);
    }

    #[test]
    fn read_zero() {
        let conn = connection();
        setup(&conn);
        let post_list = Post::read(&conn).unwrap();
        assert!(post_list.is_empty());
    }

    #[test]
    fn read_one() {
        let conn = connection();
        setup(&conn);
        let new_post = new_post(&conn);
        let expected_post = new_post.create(&conn).unwrap();
        let post_list = Post::read(&conn).unwrap();
        assert_eq!(1, post_list.len());
        assert_eq!(expected_post, post_list[0]);
    }

    #[test]
    fn read_multiple() {
        let conn = connection();
        setup(&conn);
        let new_post1 = new_post(&conn);
        let expected_post1 = new_post1.create(&conn).unwrap();
        let new_post2 = new_post(&conn);
        let expected_post2 = new_post2.create(&conn).unwrap();
        let post_list = Post::read(&conn).unwrap();
        assert_eq!(2, post_list.len());
        assert_eq!(expected_post1, post_list[0]);
        assert_eq!(expected_post2, post_list[1]);
    }

    #[test]
    fn delete_doesnt_exist() {
        let conn = connection();
        setup(&conn);
        let delete_count = Post::delete(1, &conn).unwrap();
        assert_eq!(0, delete_count);
    }

    #[test]
    fn delete_exists() {
        let conn = connection();
        setup(&conn);
        let new_post = new_post(&conn);
        let post = new_post.create(&conn).unwrap();
        let delete_count = Post::delete(post.id, &conn).unwrap();
        assert_eq!(1, delete_count);
    }
}
