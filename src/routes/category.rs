use crate::models::category::*;
use crate::response::{json_error, json_success};
use crate::DbConn;
use rocket::{delete, get, post, put};
use rocket_contrib::json::{Json, JsonValue};

#[post("/", format = "json", data = "<category>")]
pub fn create(conn: DbConn, category: Json<Category>) -> JsonValue {
    match category.create(&conn) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/", format = "json")]
pub fn get_all(conn: DbConn) -> JsonValue {
    match Category::read(&conn) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get(conn: DbConn, id: i32) -> JsonValue {
    match Category::get(id, &conn) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[put("/", format = "json", data = "<category>")]
pub fn update(conn: DbConn, category: Json<Category>) -> JsonValue {
    match category.update(&conn) {
        Ok(u) => json_success(u),
        Err(e) => json_error(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete(conn: DbConn, id: i32) -> JsonValue {
    match Category::delete(id, &conn) {
        Ok(n) => json_success(n),
        Err(e) => json_error(e),
    }
}
