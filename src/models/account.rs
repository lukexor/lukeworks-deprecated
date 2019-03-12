use crate::{DbConn, schema::account, schema::account::table as accounts};
use serde::{Serialize, Deserialize};
use chrono::prelude::*;
use diesel::prelude::*;

#[derive(PartialEq, Eq, Debug, Clone, Queryable, Identifiable, AsChangeset,
         Serialize, Deserialize)]
#[table_name="account"]
pub struct Account {
    pub id: i32,
    pub email: String,
    pub full_name: String,
    pub password: String,
    pub password_updated: NaiveDateTime,
    pub website: Option<String>,
    pub phone: Option<String>,
    pub bio: Option<String>,
    pub is_admin: bool,
    pub is_staff: bool,
    pub is_active: bool,
    pub last_login: Option<NaiveDateTime>,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Debug, Insertable, Serialize, Deserialize)]
#[table_name="account"]
pub struct NewAccount {
    pub email: String,
    pub full_name: String,
    pub password: String,
}

impl NewAccount {
    pub fn new(email: &str, full_name: &str, password: &str) -> Self {
        NewAccount {
            email: email.into(),
            full_name: full_name.into(),
            password: password.into(),
        }
    }

    pub fn create(&self, conn: &DbConn) -> QueryResult<Account> {
        diesel::insert_into(accounts).values(self).get_result::<Account>(&**conn)
    }
}

impl Account {
    pub fn new(id: i32, email: &str, full_name: &str, password: &str) -> Self {
        let now = Utc::now().naive_utc();
        Account {
            id: id,
            email: email.into(),
            full_name: full_name.into(),
            password: password.into(),
            password_updated: now,
            website: None,
            phone: None,
            bio: None,
            is_admin: false,
            is_staff: false,
            is_active: true,
            last_login: None,
            created_at: now,
            updated_at: now,
        }
    }

    pub fn update(&self, conn: &DbConn) -> QueryResult<Account> {
        diesel::update(accounts.find(self.id)).set(self).get_result::<Account>(&**conn)
    }

    pub fn get(id: i32, conn: &DbConn) -> QueryResult<Account> {
        accounts.find(id).first::<Account>(&**conn)
    }

    pub fn read(conn: &DbConn) -> QueryResult<Vec<Account>> {
        accounts.load::<Account>(&**conn)
    }

    pub fn delete(id: i32, conn: &DbConn) -> QueryResult<usize> {
        diesel::delete(accounts.find(id)).execute(&**conn)
    }
}
