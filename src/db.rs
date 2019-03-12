use crate::DbConn;
use dotenv::{dotenv, var};
use diesel::prelude::*;
use diesel::r2d2;

pub fn test_connection() -> DbConn {
    dotenv().ok();
    let database_url = var("TEST_DATABASE_URL")
        .expect("TEST_DATABASE_URL must be set in order to run tests");

    let manager = diesel::r2d2::ConnectionManager::new(database_url.to_string());

    let conn = PgConnection::establish(&database_url).unwrap();
    conn.begin_test_transaction().unwrap();
    DbConn(r2d2::Pool::builder().max_size(10).build(manager).unwrap().get().unwrap())
}
