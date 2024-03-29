use crate::schema::category;
use category::table as categories;
use diesel::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(
    Queryable, Identifiable, AsChangeset, Serialize, Deserialize, Eq, PartialEq, Debug, Clone,
)]
#[changeset_options(treat_none_as_null = "true")]
#[table_name = "category"]
pub struct Category {
    pub id: i32,
    pub name: String,
}

#[derive(Insertable, Serialize, Deserialize, Eq, PartialEq, Debug, Clone)]
#[table_name = "category"]
pub struct Insert {
    pub name: String,
}

impl Category {
    pub fn new(id: i32, name: &str) -> Self {
        Self {
            id,
            name: name.to_string(),
        }
    }

    // Associated methods

    pub fn create(conn: &diesel::PgConnection, category: &Insert) -> QueryResult<Self> {
        diesel::insert_into(categories)
            .values(category)
            .get_result::<Self>(conn)
    }

    pub fn update(conn: &diesel::PgConnection, category: &Self) -> QueryResult<Self> {
        diesel::update(categories.find(category.id))
            .set(category)
            .get_result::<Self>(conn)
    }

    pub fn get(conn: &diesel::PgConnection, id: i32) -> QueryResult<Self> {
        categories.find(id).first::<Self>(conn)
    }

    pub fn list(conn: &diesel::PgConnection) -> QueryResult<Vec<Self>> {
        categories.load::<Self>(conn)
    }

    pub fn delete(conn: &diesel::PgConnection, id: i32) -> QueryResult<usize> {
        diesel::delete(categories.find(id)).execute(conn)
    }
}

impl Insert {
    pub fn new(name: &str) -> Self {
        Self {
            name: name.to_string(),
        }
    }
}

#[cfg(all(test, not(feature = "database")))]
mod tests {}

#[cfg(all(test, feature = "database"))]
mod tests {
    use super::*;
    use crate::db::test::connection;
    use fake::*;

    fn new_category() -> Insert {
        let name = fake!(Name.name);
        Insert::new(&name)
    }

    #[test]
    fn create() {
        let conn = connection();
        let new_category = new_category();
        let actual_category = Category::create(&conn, &new_category).unwrap();
        let mut expected_category = Category::new(actual_category.id, &new_category.name);
        assert_eq!(expected_category, actual_category);
    }

    #[test]
    fn update() {
        let conn = connection();
        let mut category = create_test_category(&conn);
        category.name = "Updated Category".to_string();
        let updated_category = Category::update(&conn, &category).unwrap();
        assert_eq!(category.name, updated_category.name);
    }

    #[test]
    fn get_doesnt_exist() {
        let conn = connection();
        let result = Category::get(&conn, 0);
        assert!(result.is_err());
        assert_eq!(diesel::result::Error::NotFound, result.err().unwrap());
    }

    #[test]
    fn get_exists() {
        let conn = connection();
        let expected_category = create_test_category(&conn);
        let actual_category = Category::get(&conn, expected_category.id).unwrap();
        assert_eq!(expected_category, actual_category);
    }

    #[test]
    fn list_zero() {
        let conn = connection();
        let category_list = Category::list(&conn).unwrap();
        assert!(category_list.is_empty());
    }

    #[test]
    fn list_one() {
        let conn = connection();
        let expected_category = create_test_category(&conn);
        let category_list = Category::list(&conn).unwrap();
        assert_eq!(1, category_list.len());
        assert_eq!(expected_category, category_list[0]);
    }

    #[test]
    fn list_multiple() {
        let conn = connection();
        let expected_category1 = create_test_category(&conn);
        let expected_category2 = create_test_category(&conn);
        let category_list = Category::list(&conn).unwrap();
        assert_eq!(2, category_list.len());
        assert_eq!(expected_category1, category_list[0]);
        assert_eq!(expected_category2, category_list[1]);
    }

    #[test]
    fn delete_doesnt_exist() {
        let conn = connection();
        let delete_count = Category::delete(&conn, 0).unwrap();
        assert_eq!(0, delete_count);
    }

    #[test]
    fn delete_exists() {
        let conn = connection();
        let category = create_test_category(&conn);
        let delete_count = Category::delete(&conn, category.id).unwrap();
        assert_eq!(1, delete_count);
    }

    fn create_test_category(conn: &diesel::PgConnection) -> Category {
        Category::create(&conn, &new_category()).unwrap()
    }
}
