use crate::*;
use crate::models::account::*;
use crate::response::*;
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::{Json, JsonValue};

#[post("/", format = "json", data = "<account>")]
pub fn create_account(conn: DbConn, account: Json<NewAccount>) -> JsonValue {
    match account.create(conn) {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[get("/", format = "json")]
pub fn get_all_accounts(conn: DbConn) -> JsonValue {
    match Account::read(conn) {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get_account(conn: DbConn, id: i32) -> JsonValue {
    match Account::get(id, conn) {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[put("/", format = "json", data = "<account>")]
pub fn update_account(conn: DbConn, account: Json<Account>) -> JsonValue {
    match account.update(conn) {
        Ok(u)  => success_response(u),
        Err(e) => error_response(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete_account(conn: DbConn, id: i32) -> JsonValue {
    match Account::delete(id, conn) {
        Ok(n)  => success_response(n),
        Err(e) => error_response(e),
    }
}
