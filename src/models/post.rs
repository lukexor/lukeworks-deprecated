use crate::{DbConn, schema::post, schema::post::table as posts};
use serde::{Serialize, Deserialize};
use chrono::prelude::*;
use diesel::prelude::*;

#[derive(PartialEq, Eq, Debug, Clone, Queryable, Identifiable, AsChangeset,
         Serialize, Deserialize)]
#[table_name="post"]
pub struct Post {
    pub id: i32,
    pub title: String,
    pub body: String,
    pub category_id: i32,
    pub author_id: i32,
    pub minutes_to_read: i16,
    pub published: bool,
    pub published_at: Option<NaiveDateTime>,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Debug, Insertable, Serialize, Deserialize)]
#[table_name="post"]
pub struct NewPost {
    pub title: String,
    pub body: String,
    pub category_id: i32,
    pub author_id: i32,
    pub minutes_to_read: i16,
}

impl NewPost {
    pub fn new(title: &str, body: &str, category_id: i32,
               author_id: i32) -> Self {
        NewPost {
            title: title.to_string(),
            body: body.to_string(),
            category_id: category_id,
            author_id: author_id,
            minutes_to_read: Post::calc_minutes_to_read(body),
        }
    }

    pub fn create(&self, conn: &DbConn) -> QueryResult<Post> {
        diesel::insert_into(posts).values(self).get_result::<Post>(&**conn)
    }
}

impl Post {
    pub fn new(id: i32, title: &str, body: &str, category_id: i32,
               author_id: i32)-> Self {
        let now = Utc::now().naive_utc();
        Post {
            id: id,
            title: title.to_string(),
            body: body.to_string(),
            category_id: category_id,
            author_id: author_id,
            minutes_to_read: Post::calc_minutes_to_read(body),
            published: false,
            published_at: None,
            created_at: now,
            updated_at: now,
        }
    }

    pub fn update(&self, conn: &DbConn) -> QueryResult<Post> {
        diesel::update(posts.find(self.id)).set(self).get_result::<Post>(&**conn)
    }

    pub fn get(id: i32, conn: &DbConn) -> QueryResult<Post> {
        posts.find(id).first::<Post>(&**conn)
    }

    pub fn read(conn: &DbConn) -> QueryResult<Vec<Post>> {
        posts.load::<Post>(&**conn)
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
