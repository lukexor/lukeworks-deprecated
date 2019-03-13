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
    pub parent_id: Option<i32>,
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
            parent_id: None,
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


#[cfg(feature = "database")]
#[cfg(test)]
mod tests {
    use crate::db::test::connection;
    use crate::models::category::*;
    use fake::*;

    fn new_category() -> NewCategory {
        let name = fake!(Name.name);
        NewCategory::new(&name)
    }

    #[test]
    fn create() {
        let conn = connection();
        let new_category = new_category();
        let actual_category = new_category.create(&conn).unwrap();
        let expected_category = Category {
            id: actual_category.id,
            name: new_category.name,
            parent_id: None,
            created_at: actual_category.created_at,
            updated_at: actual_category.updated_at,
        };
        assert_eq!(expected_category, actual_category);
    }

    #[test]
    fn update() {
        let conn = connection();
        let new_category = new_category();
        let mut category = new_category.create(&conn).unwrap();
        let new_name = "Updated Category";
        category.name = new_name.into();
        let updated_category = category.update(&conn).unwrap();
        assert_eq!(new_name, updated_category.name);
    }

    #[test]
    fn get_doesnt_exist() {
        let conn = connection();
        let result = Category::get(0, &conn);
        assert!(result.is_err());
        assert_eq!(diesel::result::Error::NotFound, result.err().unwrap());
    }

    #[test]
    fn get_exists() {
        let conn = connection();
        let new_category = new_category();
        let expected_category = new_category.create(&conn).unwrap();
        let actual_category = Category::get(expected_category.id, &conn).unwrap();
        assert_eq!(expected_category, actual_category);
    }

    #[test]
    fn read_zero() {
        let conn = connection();
        let category_list = Category::read(&conn).unwrap();
        assert!(category_list.is_empty());
    }

    #[test]
    fn read_one() {
        let conn = connection();
        let new_category = new_category();
        let expected_category = new_category.create(&conn).unwrap();
        let category_list = Category::read(&conn).unwrap();
        assert_eq!(1, category_list.len());
        assert_eq!(expected_category, category_list[0]);
    }

    #[test]
    fn read_multiple() {
        let conn = connection();
        let new_category1 = new_category();
        let expected_category1 = new_category1.create(&conn).unwrap();
        let new_category2 = new_category();
        let expected_category2 = new_category2.create(&conn).unwrap();
        let category_list = Category::read(&conn).unwrap();
        assert_eq!(2, category_list.len());
        assert_eq!(expected_category1, category_list[0]);
        assert_eq!(expected_category2, category_list[1]);
    }

    #[test]
    fn delete_doesnt_exist() {
        let conn = connection();
        let delete_count = Category::delete(1, &conn).unwrap();
        assert_eq!(0, delete_count);
    }

    #[test]
    fn delete_exists() {
        let conn = connection();
        let new_category = new_category();
        let category = new_category.create(&conn).unwrap();
        let delete_count = Category::delete(category.id, &conn).unwrap();
        assert_eq!(1, delete_count);
    }
}
