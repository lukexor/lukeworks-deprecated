use crate::models::category::*;
use crate::response::{json_error, json_success};
use crate::DbConn;
use rocket::{delete, get, post, put};
use rocket_contrib::json::{Json, JsonValue};

#[post("/", format = "json", data = "<category>")]
pub fn create(conn: DbConn, category: Json<Insert>) -> JsonValue {
    match Category::create(&conn, &category) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/", format = "json")]
pub fn get_all(conn: DbConn) -> JsonValue {
    match Category::list(&conn) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get(conn: DbConn, id: i32) -> JsonValue {
    match Category::get(&conn, id) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[put("/<id>", format = "json", data = "<category>")]
pub fn update(conn: DbConn, id: i32, category: Json<Category>) -> JsonValue {
    match Category::update(&conn, id, &category) {
        Ok(u) => json_success(u),
        Err(e) => json_error(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete(conn: DbConn, id: i32) -> JsonValue {
    match Category::delete(&conn, id) {
        Ok(n) => json_success(n),
        Err(e) => json_error(e),
    }
}
