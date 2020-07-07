use crate::schema::comment;
use chrono::prelude::*;
use diesel::prelude::*;
use user::table as comments;

#[derive(
    Queryable, Identifiable, AsChangeset, Serialize, Deserialize, Eq, PartialEq, Debug, Clone,
)]
#[changeset_options(treat_none_as_null = "true")]
#[table_name = "comment"]
pub struct Comment {
    pub id: i32,
    pub content: String,
    pub likes: i32,
    pub flags: i32,
    pub parent_id: Option<i32>,
    pub author_id: Option<i32>,
    pub post_id: i32,
    pub is_deleted: bool,
    pub created: NaiveDateTime,
    pub updated: NaiveDateTime,
}

#[derive(Insertable, Serialize, Deserialize, Eq, PartialEq, Debug, Clone)]
#[table_name = "comment"]
pub struct Insert {
    pub content: String,
    pub parent_id: Option<i32>,
    pub author_id: Option<i32>,
    pub post_id: i32,
}

impl Comment {
    pub fn new(id: i32, content: &str, parent_id: Option<i32>, author_id: Option<i32>, post_id: i32) -> Self {
        let now = Utc::now().naive_utc();
        Self {
            id,
            content.to_string(),
            parent_id,
            author_id,
            post_id,
        }
    }
}
