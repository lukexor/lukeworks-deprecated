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


#[cfg(feature = "database")]
#[cfg(test)]
mod tests {
    use crate::db::test::connection;
    use crate::models::account::*;
    use bcrypt::{DEFAULT_COST, hash};
    use fake::*;

    fn new_account() -> NewAccount {
        let email = fake!(Internet.safe_email);
        let full_name = fake!(Name.name);
        let password = hash(fake!(Company.buzzword), DEFAULT_COST).unwrap();
        NewAccount::new(&email, &full_name, &password)
    }

    #[test]
    fn create() {
        let conn = connection();
        let new_account = new_account();
        let actual_account = new_account.create(&conn).unwrap();
        let expected_account = Account {
            id: actual_account.id,
            email: new_account.email,
            full_name: new_account.full_name,
            password: new_account.password,
            password_updated: actual_account.password_updated,
            website: None,
            phone: None,
            bio: None,
            is_admin: false,
            is_staff: false,
            is_active: true,
            last_login: None,
            created_at: actual_account.created_at,
            updated_at: actual_account.updated_at,
        };
        assert_eq!(expected_account, actual_account);
    }

    #[test]
    fn update() {
        let conn = connection();
        let new_account = new_account();
        let mut account = new_account.create(&conn).unwrap();
        let new_full_name = "Updated User";
        account.full_name = new_full_name.into();
        let updated_account = account.update(&conn).unwrap();
        assert_eq!(new_full_name, updated_account.full_name);
    }

     #[test]
     fn get_doesnt_exist() {
         let conn = connection();
         let result = Account::get(0, &conn);
         assert!(result.is_err());
         assert_eq!(diesel::result::Error::NotFound, result.err().unwrap());
     }

     #[test]
     fn get_exists() {
         let conn = connection();
         let new_account = new_account();
         let expected_account = new_account.create(&conn).unwrap();
         let actual_account = Account::get(expected_account.id, &conn).unwrap();
         assert_eq!(expected_account, actual_account);
     }

     #[test]
     fn read_zero() {
         let conn = connection();
         let account_list = Account::read(&conn).unwrap();
         assert!(account_list.is_empty());
     }

     #[test]
     fn read_one() {
         let conn = connection();
         let new_account = new_account();
         let expected_account = new_account.create(&conn).unwrap();
         let account_list = Account::read(&conn).unwrap();
         assert_eq!(1, account_list.len());
         assert_eq!(expected_account, account_list[0]);
     }

     #[test]
     fn read_multiple() {
         let conn = connection();
         let new_account1 = new_account();
         let new_account2 = new_account();
         let expected_account1 = new_account1.create(&conn).unwrap();
         let expected_account2 = new_account2.create(&conn).unwrap();
         let account_list = Account::read(&conn).unwrap();
         assert_eq!(2, account_list.len());
         assert_eq!(expected_account1, account_list[0]);
         assert_eq!(expected_account2, account_list[1]);
     }

     #[test]
     fn delete_doesnt_exist() {
         let conn = connection();
         let delete_count = Account::delete(0, &conn).unwrap();
         assert_eq!(0, delete_count);
     }

     #[test]
     fn delete_exists() {
         let conn = connection();
         let new_account = new_account();
         let account = new_account.create(&conn).unwrap();
         let delete_count = Account::delete(account.id, &conn).unwrap();
         assert_eq!(1, delete_count);
     }
}
