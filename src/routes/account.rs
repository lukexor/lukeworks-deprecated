use crate::*;
use crate::models::account::*;
use crate::schema::account;
use crate::response::*;
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::{Json, JsonValue};
use diesel::{QueryDsl, RunQueryDsl};

#[post("/", format = "json", data = "<account>")]
pub fn create_account(conn: DbConn, account: Json<NewAccount>) -> JsonValue {
    let new_account = diesel::insert_into(account::table)
        .values(&account.into_inner())
        .get_result::<Account>(&*conn);
    match new_account {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[get("/", format = "json")]
pub fn get_all_accounts(conn: DbConn) -> JsonValue {
    let accounts = account::table.load::<Account>(&*conn);
    match accounts {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get_account(conn: DbConn, id: i32) -> JsonValue {
    let account = account::table.find(id)
        .first::<Account>(&*conn);
    match account {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[put("/<id>", format = "json", data = "<account>")]
pub fn update_account(conn: DbConn, id: i32, account: Json<Account>) -> JsonValue {
    let update = diesel::update(
        account::table.find(id))
        .set(&account.into_inner())
        .get_result::<Account>(&*conn);
    match update {
        Ok(u)  => success_response(u),
        Err(e) => error_response(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete_account(conn: DbConn, id: i32) -> JsonValue {
    let deleted = diesel::delete(
        account::table.find(id))
        .execute(&*conn);
    match deleted {
        Ok(n)  => success_response(n),
        Err(e) => error_response(e),
    }
}
