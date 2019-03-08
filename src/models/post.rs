use crate::*;
use crate::schema::post;
use serde::{Serialize, Deserialize};
use chrono::NaiveDateTime;
use diesel::{QueryDsl, RunQueryDsl};

#[derive(Queryable, Serialize, Deserialize, Identifiable, AsChangeset)]
#[table_name="post"]
pub struct Post {
    pub id: i32,
    pub title: String,
    pub body: String,
    pub category_id: i32,
    pub author_id: i32,
    pub minutes_to_read: i16,
    pub is_project: bool,
    pub published: bool,
    pub published_at: NaiveDateTime,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Insertable, Serialize, Deserialize)]
#[table_name="post"]
pub struct NewPost {
    pub title: String,
    pub body: String,
    pub category_id: i32,
    pub author_id: i32,
}

impl NewPost {
    pub fn create(&self, conn: DbConn) -> Result<Post, diesel::result::Error> {
        diesel::insert_into(post::table)
            .values(self)
            .get_result::<Post>(&*conn)
    }
}

impl Post {
    pub fn update(&self, conn: DbConn) -> Result<Post, diesel::result::Error> {
        diesel::update(post::table.find(self.id))
            .set(self)
            .get_result::<Post>(&*conn)
    }

    pub fn get(id: i32, conn: DbConn) -> Result<Post, diesel::result::Error> {
        post::table.find(id).first::<Post>(&*conn)
    }

    pub fn read(conn: DbConn) -> Result<Vec<Post>, diesel::result::Error> {
        post::table.load::<Post>(&*conn)
    }
    pub fn delete(id: i32, conn: DbConn) -> Result<usize, diesel::result::Error> {
        diesel::delete(post::table.find(id))
            .execute(&*conn)
    }
}
