use crate::DbConn;
use crate::models::category::*;
use crate::response::{json_success, json_error};
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::{Json, JsonValue};

#[post("/", format = "json", data = "<category>")]
pub fn create_category(conn: DbConn, category: Json<NewCategory>) -> JsonValue {
    match category.create(&conn) {
        Ok(a)  => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/", format = "json")]
pub fn get_all_categories(conn: DbConn) -> JsonValue {
    match Category::read(&conn) {
        Ok(a)  => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get_category(conn: DbConn, id: i32) -> JsonValue {
    match Category::get(id, &conn) {
        Ok(a)  => json_success(a),
        Err(e) => json_error(e),
    }
}

#[put("/", format = "json", data = "<category>")]
pub fn update_category(conn: DbConn, category: Json<Category>)
  -> JsonValue {
    match category.update(&conn) {
        Ok(u)  => json_success(u),
        Err(e) => json_error(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete_category(conn: DbConn, id: i32) -> JsonValue {
    match Category::delete(id, &conn) {
        Ok(n)  => json_success(n),
        Err(e) => json_error(e),
    }
}
