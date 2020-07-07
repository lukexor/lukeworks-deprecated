use crate::models::account::*;
use crate::response::{json_error, json_success};
use crate::DbConn;
use rocket::{delete, get, post, put};
use rocket_contrib::json::{Json, JsonValue};

#[post("/", format = "json", data = "<account>")]
pub fn create(conn: DbConn, account: Json<Insert>) -> JsonValue {
    match Account::create(&conn, &account) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/", format = "json")]
pub fn list(conn: DbConn) -> JsonValue {
    match Account::list(&conn) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get(conn: DbConn, id: i32) -> JsonValue {
    match Account::get(&conn, id) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[put("/", format = "json", data = "<account>")]
pub fn update(conn: DbConn, account: Json<Account>) -> JsonValue {
    match Account::update(&conn, &account) {
        Ok(u) => json_success(u),
        Err(e) => json_error(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete(conn: DbConn, id: i32) -> JsonValue {
    match Account::delete(&conn, id) {
        Ok(n) => json_success(n),
        Err(e) => json_error(e),
    }
}
