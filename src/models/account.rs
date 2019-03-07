use crate::schema::account;
use serde::{Serialize, Deserialize};
use chrono::NaiveDateTime;

#[derive(Queryable, Serialize, Deserialize, Identifiable, AsChangeset)]
#[table_name="account"]
pub struct Account {
    pub id: i32,
    pub email: String,
    pub full_name: String,
    pub password: String,
    pub password_updated: NaiveDateTime,
    pub website: Option<String>,
    pub gravatar: Option<String>,
    pub phone: Option<String>,
    pub bio: Option<String>,
    pub is_admin: bool,
    pub is_staff: bool,
    pub is_active: bool,
    pub last_login: Option<NaiveDateTime>,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Insertable, Serialize, Deserialize)]
#[table_name="account"]
pub struct NewAccount {
    pub email: String,
    pub full_name: String,
    pub password: String,
}

