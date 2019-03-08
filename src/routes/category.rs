use crate::*;
use crate::models::category::*;
use crate::response::*;
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::{Json, JsonValue};

#[post("/", format = "json", data = "<category>")]
pub fn create_category(conn: DbConn, category: Json<NewCategory>) -> JsonValue {
    match category.create(conn) {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[get("/", format = "json")]
pub fn get_all_categories(conn: DbConn) -> JsonValue {
    match Category::read(conn) {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get_category(conn: DbConn, id: i32) -> JsonValue {
    match Category::get(id, conn) {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[put("/", format = "json", data = "<category>")]
pub fn update_category(conn: DbConn, category: Json<Category>)
  -> JsonValue {
    match category.update(conn) {
        Ok(u)  => success_response(u),
        Err(e) => error_response(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete_category(conn: DbConn, id: i32) -> JsonValue {
    match Category::delete(id, conn) {
        Ok(n)  => success_response(n),
        Err(e) => error_response(e),
    }
}
