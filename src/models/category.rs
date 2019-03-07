use crate::schema::category;
use serde::{Serialize, Deserialize};
use chrono::NaiveDateTime;

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

