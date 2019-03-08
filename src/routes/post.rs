use crate::*;
use crate::models::post::*;
use crate::response::*;
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
    match post.create(conn) {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

// TODO Add search api route

#[get("/", format = "json")]  // TODO Add filters/pagination
pub fn get_all_posts(conn: DbConn) -> JsonValue {
    match Post::read(conn) {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get_post(conn: DbConn, id: i32) -> JsonValue {
    match Post::get(id, conn) {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[put("/", format = "json", data = "<post>")]
pub fn update_post(conn: DbConn, post: Json<Post>) -> JsonValue {
    match post.update(conn) {
        Ok(u)  => success_response(u),
        Err(e) => error_response(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete_post(conn: DbConn, id: i32) -> JsonValue {
    match Post::delete(id, conn) {
        Ok(n)  => success_response(n),
        Err(e) => error_response(e),
    }
}
