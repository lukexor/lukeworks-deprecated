use crate::schema::post;
use serde::{Serialize, Deserialize};
use chrono::NaiveDateTime;

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

