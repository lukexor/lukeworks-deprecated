use crate::*;
use crate::schema::account;
use serde::{Serialize, Deserialize};
use chrono::NaiveDateTime;
use diesel::{QueryDsl, RunQueryDsl};

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

impl NewAccount {
    pub fn create(&self, conn: DbConn) -> Result<Account, diesel::result::Error> {
        diesel::insert_into(account::table)
            .values(self)
            .get_result::<Account>(&*conn)
    }
}

impl Account {
    pub fn update(&self, conn: DbConn) -> Result<Account, diesel::result::Error> {
        diesel::update(account::table.find(self.id))
            .set(self)
            .get_result::<Account>(&*conn)
    }

    pub fn get(id: i32, conn: DbConn) -> Result<Account, diesel::result::Error> {
        account::table.find(id).first::<Account>(&*conn)
    }

    pub fn read(conn: DbConn) -> Result<Vec<Account>, diesel::result::Error> {
        account::table.load::<Account>(&*conn)
    }
    pub fn delete(id: i32, conn: DbConn) -> Result<usize, diesel::result::Error> {
        diesel::delete(account::table.find(id))
            .execute(&*conn)
    }
}
