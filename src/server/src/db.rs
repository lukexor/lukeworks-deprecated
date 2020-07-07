use rocket_contrib::database;

#[database("pg")]
pub struct DbConn(diesel::PgConnection);

#[cfg(all(test, feature = "database"))]
pub mod test {
    use diesel::prelude::*;
    use std::env;

    pub fn connection() -> diesel::PgConnection {
        let mut database_url = env::var("DATABASE_URL").unwrap();
        if !database_url.contains("_test") {
            database_url.push_str("_test");
        }
        let conn = PgConnection::establish(&database_url).unwrap();
        conn.begin_test_transaction().unwrap();
        conn
    }
}
