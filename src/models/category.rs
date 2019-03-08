use crate::*;
use crate::schema::category;
use serde::{Serialize, Deserialize};
use chrono::NaiveDateTime;
use diesel::{QueryDsl, RunQueryDsl};

#[derive(Queryable, Serialize, Deserialize, Identifiable, AsChangeset)]
#[table_name="category"]
pub struct Category {
    pub id: i32,
    pub name: String,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Insertable, Serialize, Deserialize)]
#[table_name="category"]
pub struct NewCategory {
    pub name: String,
}

impl NewCategory {
    pub fn create(&self, conn: DbConn) -> Result<Category, diesel::result::Error> {
        diesel::insert_into(category::table)
            .values(self)
            .get_result::<Category>(&*conn)
    }
}

impl Category {
    pub fn update(&self, conn: DbConn) -> Result<Category, diesel::result::Error> {
        diesel::update(category::table.find(self.id))
            .set(self)
            .get_result::<Category>(&*conn)
    }

    pub fn get(id: i32, conn: DbConn) -> Result<Category, diesel::result::Error> {
        category::table.find(id).first::<Category>(&*conn)
    }

    pub fn read(conn: DbConn) -> Result<Vec<Category>, diesel::result::Error> {
        category::table.load::<Category>(&*conn)
    }
    pub fn delete(id: i32, conn: DbConn) -> Result<usize, diesel::result::Error> {
        diesel::delete(category::table.find(id))
            .execute(&*conn)
    }
}
