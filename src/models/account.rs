use crate::{schema::account, DbConn};
use account::table as accounts;
use bcrypt::{hash, DEFAULT_COST};
use chrono::prelude::*;
use diesel::prelude::*;
use rand::{seq::SliceRandom, thread_rng};
use serde::{Deserialize, Serialize};

#[derive(
    Queryable, Identifiable, AsChangeset, Serialize, Deserialize, Eq, PartialEq, Debug, Clone,
)]
#[changeset_options(treat_none_as_null = "true")]
#[table_name = "account"]
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

#[derive(Insertable, Serialize, Deserialize, Eq, PartialEq, Debug, Clone)]
#[table_name = "account"]
pub struct Insert {
    pub email: String,
    pub full_name: String,
    pub password: String,
}

impl Account {
    pub fn new(id: i32, email: &str, full_name: &str) -> Self {
        let now = Utc::now().naive_utc();
        Self {
            id,
            email: email.to_string(),
            full_name: full_name.to_string(),
            password: Self::generate_hashed_password(),
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

    // fn with_password(mut self, password: &str) -> Self {
    //     self.password = Self::hash_password(password);
    //     self.password_updated = Utc::now().naive_utc();
    //     self
    // }

    // Associated methods

    pub fn create(conn: &DbConn, account: &Insert) -> QueryResult<Self> {
        diesel::insert_into(accounts)
            .values(account)
            .get_result::<Self>(&**conn)
    }

    pub fn update(conn: &DbConn, account: &Self) -> QueryResult<Self> {
        diesel::update(accounts.find(account.id))
            .set(account)
            .get_result::<Self>(&**conn)
    }

    pub fn get(conn: &DbConn, id: i32) -> QueryResult<Self> {
        accounts.find(id).first::<Self>(&**conn)
    }

    pub fn list(conn: &DbConn) -> QueryResult<Vec<Self>> {
        accounts.load::<Self>(&**conn)
    }

    pub fn delete(conn: &DbConn, id: i32) -> QueryResult<usize> {
        diesel::delete(accounts.find(id)).execute(&**conn)
    }

    fn generate_hashed_password() -> String {
        const CHARSET: &[u8] =
            b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789)(*&^%$#@!~";
        let mut rng = thread_rng();
        let password: Option<String> = (0..30)
            .map(|_| Some(*CHARSET.choose(&mut rng)? as char))
            .collect();
        Self::hash_password(&password.expect("Valid password."))
    }

    fn hash_password(password: &str) -> String {
        hash(password, DEFAULT_COST).expect("Valid hash.")
    }
}

impl Insert {
    pub fn new(email: &str, full_name: &str) -> Self {
        Self {
            email: email.to_string(),
            full_name: full_name.to_string(),
            password: Account::generate_hashed_password(),
        }
    }
}

// #[cfg(not(feature = "database"))]
// #[cfg(test)]
// mod tests {
//     use super::*;
//     use bcrypt::verify;

//     #[test]
//     fn with_password() {
//         let password = "1234";
//         let account = Account::new(1, "test@example.com", "Bob Ross").with_password(password);
//         let valid = verify(&password, &account.password).unwrap();
//         assert!(valid);
//     }
// }

#[cfg(feature = "database")]
#[cfg(test)]
mod tests {
    use super::*;
    use crate::db::test::connection;
    use fake::*;

    fn new_account() -> Insert {
        let email = fake!(Internet.safe_email);
        let full_name = fake!(Name.name);
        let account = Insert::new(&email, &full_name);
        account
    }

    #[test]
    fn create() {
        let conn = connection();
        let new_account = new_account();
        let actual_account = Account::create(&conn, &new_account).unwrap();
        let mut expected_account = Account::new(
            actual_account.id,
            &new_account.email,
            &new_account.full_name,
        );
        expected_account.password = actual_account.password.clone();
        expected_account.password_updated = actual_account.password_updated;
        expected_account.created_at = actual_account.created_at;
        expected_account.updated_at = actual_account.updated_at;
        assert_eq!(expected_account, actual_account);
    }

    #[test]
    fn update() {
        let conn = connection();
        let mut account = create_test_account(&conn);
        account.full_name = "Updated Full name".to_string();
        let updated_account = Account::update(&conn, &account).unwrap();
        assert_eq!(account.full_name, updated_account.full_name);
    }

    #[test]
    fn get_doesnt_exist() {
        let conn = connection();
        let result = Account::get(&conn, 0);
        assert!(result.is_err());
        assert_eq!(diesel::result::Error::NotFound, result.err().unwrap());
    }

    #[test]
    fn get_exists() {
        let conn = connection();
        let expected_account = create_test_account(&conn);
        let actual_account = Account::get(&conn, expected_account.id).unwrap();
        assert_eq!(expected_account, actual_account);
    }

    #[test]
    fn list_zero() {
        let conn = connection();
        let account_list = Account::list(&conn).unwrap();
        assert!(account_list.is_empty());
    }

    #[test]
    fn list_one() {
        let conn = connection();
        let expected_account = create_test_account(&conn);
        let account_list = Account::list(&conn).unwrap();
        assert_eq!(1, account_list.len());
        assert_eq!(expected_account, account_list[0]);
    }

    #[test]
    fn list_multiple() {
        let conn = connection();
        let expected_account1 = create_test_account(&conn);
        let expected_account2 = create_test_account(&conn);
        let account_list = Account::list(&conn).unwrap();
        assert_eq!(2, account_list.len());
        assert_eq!(expected_account1, account_list[0]);
        assert_eq!(expected_account2, account_list[1]);
    }

    #[test]
    fn delete_doesnt_exist() {
        let conn = connection();
        let delete_count = Account::delete(&conn, 0).unwrap();
        assert_eq!(0, delete_count);
    }

    #[test]
    fn delete_exists() {
        let conn = connection();
        let account = create_test_account(&conn);
        let delete_count = Account::delete(&conn, account.id).unwrap();
        assert_eq!(1, delete_count);
    }

    fn create_test_account(conn: &DbConn) -> Account {
        Account::create(&conn, &new_account()).unwrap()
    }
}
