use crate::{models::account::Account, schema::app_user};
use app_user::table as users;
use chrono::prelude::*;
use diesel::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(
    Queryable, Identifiable, AsChangeset, Serialize, Deserialize, Eq, PartialEq, Debug, Clone,
)]
#[changeset_options(treat_none_as_null = "true")]
#[table_name = "app_user"]
pub struct User {
    pub id: i32,
    pub name: String,
    pub email: String,
    pub website: Option<String>,
    pub is_deleted: bool,
    pub created: NaiveDateTime,
    pub updated: NaiveDateTime,
}

#[derive(Insertable, Serialize, Deserialize, Eq, PartialEq, Debug, Clone)]
#[table_name = "app_user"]
pub struct Insert {
    pub name: String,
    pub email: String,
    pub website: Option<String>,
}

impl User {
    pub fn new(id: i32, name: &str, email: &str, website: Option<&str>) -> Self {
        let now = Utc::now().naive_utc();
        Self {
            id,
            name: name.to_string(),
            email: email.to_string(),
            website: website.map(|w| w.to_string()),
            is_deleted: false,
            created: now,
            updated: now,
        }
    }

    pub fn get_user_account(conn: &diesel::PgConnection, id: i32) -> QueryResult<(Self, Account)> {
        let user = users.find(id).first::<Self>(conn)?;
        let account = Account::belonging_to(&user).first(conn)?;
        Ok((user, account))
    }
}
