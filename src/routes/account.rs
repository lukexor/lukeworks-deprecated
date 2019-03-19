use crate::DbConn;
use crate::models::account::*;
use crate::response::{json_success, json_error};
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::{Json, JsonValue};

#[post("/", format = "json", data = "<account>")]
pub fn create(conn: DbConn, account: Json<New>) -> JsonValue {
    match account.create(&conn) {
        Ok(a)  => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/", format = "json")]
pub fn get_all(conn: DbConn) -> JsonValue {
    match Account::read(&conn) {
        Ok(a)  => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get(conn: DbConn, id: i32) -> JsonValue {
    match Account::get(id, &conn) {
        Ok(a)  => json_success(a),
        Err(e) => json_error(e),
    }
}

#[put("/", format = "json", data = "<account>")]
pub fn update(conn: DbConn, account: Json<Account>) -> JsonValue {
    match account.update(&conn) {
        Ok(u)  => json_success(u),
        Err(e) => json_error(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete(conn: DbConn, id: i32) -> JsonValue {
    match Account::delete(id, &conn) {
        Ok(n)  => json_success(n),
        Err(e) => json_error(e),
    }
}
