use rocket_contrib::database;

#[database("luke_web")]
pub struct DbConn(diesel::PgConnection);

#[cfg(feature = "database")]
#[cfg(test)]
pub mod test {
    use diesel::prelude::*;
    use diesel::r2d2;
    use dotenv::{dotenv, var};
    use super::DbConn;

    pub fn connection() -> DbConn {
        dotenv().ok();
        let database_url = var("TEST_DATABASE_URL")
            .expect("TEST_DATABASE_URL must be set in order to run tests");

        let manager = r2d2::ConnectionManager::new(database_url.to_string());

        let pool: r2d2::Pool<r2d2::ConnectionManager<PgConnection>>
            = r2d2::Pool::builder().max_size(1).build(manager).unwrap();
        let conn = pool.get().unwrap();
        conn.begin_test_transaction().expect("valid transaction");
        DbConn(conn)
    }
}
