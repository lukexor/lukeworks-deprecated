use crate::{DbConn, schema::category, schema::category::table as categories};
use serde::{Serialize, Deserialize};
use chrono::prelude::*;
use diesel::prelude::*;

#[derive(PartialEq, Eq, Debug, Clone, Queryable, Identifiable, AsChangeset,
         Serialize, Deserialize)]
#[table_name="category"]
pub struct Category {
    pub id: i32,
    pub name: String,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Debug, Insertable, Serialize, Deserialize)]
#[table_name="category"]
pub struct NewCategory {
    pub name: String,
}

impl NewCategory {
    pub fn new(name: &str) -> Self {
        NewCategory {
            name: name.to_string(),
        }
    }

    pub fn create(&self, conn: &DbConn) -> QueryResult<Category> {
        diesel::insert_into(categories).values(self).get_result::<Category>(&**conn)
    }
}

impl Category {
    pub fn new(id: i32, name: &str) -> Self {
        let now = Utc::now().naive_utc();
        Category {
            id: id,
            name: name.to_string(),
            created_at: now,
            updated_at: now,
        }
    }

    pub fn update(&self, conn: &DbConn) -> QueryResult<Category> {
        diesel::update(categories.find(self.id)).set(self).get_result::<Category>(&**conn)
    }

    pub fn get(id: i32, conn: &DbConn) -> QueryResult<Category> {
        categories.find(id).first::<Category>(&**conn)
    }

    pub fn read(conn: &DbConn) -> QueryResult<Vec<Category>> {
        categories.load::<Category>(&**conn)
    }
    pub fn delete(id: i32, conn: &DbConn) -> QueryResult<usize> {
        diesel::delete(categories.find(id)).execute(&**conn)
    }
}
