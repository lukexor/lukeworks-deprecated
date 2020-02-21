use crate::schema::user;
use chrono::prelude::*;
use diesel::prelude::*;
use user::table as users;

#[derive(
    Queryable, Identifiable, AsChangeset, Serialize, Deserialize, Eq, PartialEq, Debug, Clone,
)]
#[changeset_options(treat_none_as_null = "true")]
#[table_name = "app_user"]
pub struct User {
    pub id: i32,
    pub name: String,
    pub email: String,
    pub website: String,
    pub is_deleted: bool,
    pub created: NaiveDateTime,
    pub updated: NaiveDateTime,
}

#[derive(Insertable, Serialize, Deserialize, Eq, PartialEq, Debug, Clone)]
#[table_name = "app_user"]
pub struct Insert {
    pub name: String,
    pub email: String,
    pub website: String,
}

impl User {
    pub fn new(id: i32, name: &str, email: &str, website: &str) -> Self {
        let now = Utc::now().naive_utc();
        Self {
            id,
            name: name.to_string(),
            email: email.to_string(),
            website: website.to_string(),
            is_deleted: false,
            created: now,
            updated: now,
        }
    }
