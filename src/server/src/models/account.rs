use crate::{models::user::User, schema::account, sql_types::AccountRole};
use account::table as accounts;
use chrono::prelude::*;
use diesel::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(
    Queryable,
    Identifiable,
    AsChangeset,
    Serialize,
    Deserialize,
    Associations,
    Eq,
    PartialEq,
    Debug,
    Clone,
)]
#[changeset_options(treat_none_as_null = "true")]
#[belongs_to(User)]
#[table_name = "account"]
pub struct Account {
    pub id: i32,
    pub user_id: i32,
    pub password: Option<String>,
    pub password_updated: Option<NaiveDateTime>,
    pub bio: Option<String>,
    pub phone: Option<String>,
    pub avatar: Option<String>,
    pub role: AccountRole,
    pub last_login: Option<NaiveDateTime>,
    pub locked_at: Option<NaiveDateTime>,
    pub is_active: bool,
    pub created: NaiveDateTime,
    pub updated: NaiveDateTime,
}

#[derive(Insertable, Serialize, Deserialize, Eq, PartialEq, Debug, Clone)]
#[table_name = "account"]
pub struct Insert {
    user_id: i32,
}

impl Account {
    pub fn new(id: i32, user_id: i32) -> Self {
        let now = Utc::now().naive_utc();
        Self {
            id,
            user_id,
            password: None,
            password_updated: None,
            bio: None,
            phone: None,
            avatar: None,
            role: AccountRole::User,
            last_login: None,
            locked_at: None,
            is_active: true,
            created: now,
            updated: now,
        }
    }

    // Associated methods

    pub fn create(conn: &diesel::PgConnection, account: &Insert) -> QueryResult<Self> {
        diesel::insert_into(accounts)
            .values(account)
            .get_result::<Self>(conn)
    }

    pub fn update(conn: &diesel::PgConnection, id: i32, account: &Self) -> QueryResult<Self> {
        if id == account.id {
            diesel::update(accounts.find(account.id))
                .set(account)
                .get_result::<Self>(conn)
        } else {
            QueryResult::Err(diesel::result::Error::NotFound)
        }
    }

    // TODO Add password setting function using postgres crypt() and get_salt('bf')

    pub fn get(conn: &diesel::PgConnection, id: i32) -> QueryResult<Self> {
        accounts.find(id).first::<Self>(conn)
    }

    pub fn list(conn: &diesel::PgConnection) -> QueryResult<Vec<Self>> {
        accounts.load::<Self>(conn)
    }

    pub fn delete(conn: &diesel::PgConnection, id: i32) -> QueryResult<usize> {
        diesel::delete(accounts.find(id)).execute(conn)
    }
}

impl Insert {
    pub fn new(user_id: i32) -> Self {
        Self { user_id }
    }
}

#[cfg(all(test, not(feature = "database")))]
mod tests {}

#[cfg(all(test, feature = "database"))]
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
        expected_account.created = actual_account.created;
        expected_account.updated = actual_account.updated;
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

    fn create_test_account(conn: &diesel::PgConnection) -> Account {
        Account::create(conn, &new_account()).unwrap()
    }
}
