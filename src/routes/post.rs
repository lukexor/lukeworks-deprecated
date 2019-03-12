use crate::DbConn;
use crate::models::post::*;
use crate::response::{json_success, json_error};
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::{Json, JsonValue};

// Pages ------------------------------------------------------------

#[get("/<title>")]  // A specific blog post or project by title
pub fn title(title: String) -> String {
    format!("Hello, title {}!", title)
}

#[get("/blog")]  // List of blog posts with date/title
pub fn blog() -> &'static str {
    "Hello, blog!"
}

#[get("/projects")]  // List of project posts with date/title
pub fn projects() -> &'static str {
    "Hello, projects!"
}

#[get("/category/<category>")]  // List of blog posts by category
pub fn post_by_category(category: String) -> String {
    format!("Hello, category {}!", category.as_str())
}


// REST APIs --------------------------------------------------------

#[post("/", format = "json", data = "<post>")]
pub fn create_post(conn: DbConn, post: Json<NewPost>) -> JsonValue {
    match post.create(&conn) {
        Ok(a)  => json_success(a),
        Err(e) => json_error(e),
    }
}

// TODO Add search api route

#[get("/", format = "json")]  // TODO Add filters/pagination
pub fn get_all_posts(conn: DbConn) -> JsonValue {
    match Post::read(&conn) {
        Ok(a)  => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get_post(conn: DbConn, id: i32) -> JsonValue {
    match Post::get(id, &conn) {
        Ok(a)  => json_success(a),
        Err(e) => json_error(e),
    }
}

#[put("/", format = "json", data = "<post>")]
pub fn update_post(conn: DbConn, post: Json<Post>) -> JsonValue {
    match post.update(&conn) {
        Ok(u)  => json_success(u),
        Err(e) => json_error(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete_post(conn: DbConn, id: i32) -> JsonValue {
    match Post::delete(id, &conn) {
        Ok(n)  => json_success(n),
        Err(e) => json_error(e),
    }
}
