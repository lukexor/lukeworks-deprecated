use crate::{
    models::post::*,
    response::{json_error, json_success},
    DbConn,
};
use rocket::{delete, get, post, put};
use rocket_contrib::json::{Json, JsonValue};

// TODO Add search by title/content
// TODO Add filter by category
// TODO Add filter by tag
// TODO Add pagination

#[post("/", format = "json", data = "<post>")]
pub fn create(conn: DbConn, post: Json<Insert>) -> JsonValue {
    match Post::create(&conn, &post) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/", format = "json")] // TODO Add filters/pagination
pub fn get_all(conn: DbConn) -> JsonValue {
    match Post::list(&conn) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get(conn: DbConn, id: i32) -> JsonValue {
    match Post::get(&conn, id) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[put("/<id>", format = "json", data = "<post>")]
pub fn update(conn: DbConn, id: i32, post: Json<Post>) -> JsonValue {
    match Post::update(&conn, id, &post) {
        Ok(u) => json_success(u),
        Err(e) => json_error(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete(conn: DbConn, id: i32) -> JsonValue {
    match Post::delete(&conn, id) {
        Ok(n) => json_success(n),
        Err(e) => json_error(e),
    }
}
