use crate::models::post::*;
use crate::response::{json_error, json_success};
use crate::DbConn;
use rocket::{delete, get, post, put};
use rocket_contrib::json::{Json, JsonValue};
use rocket_contrib::templates::Template;
use tera::Context;

// Pages ------------------------------------------------------------

#[get("/<title>")] // A specific blog post or project by title
pub fn by_title(title: String) -> Template {
    let mut context = Context::new();
    context.insert("title", &title);
    Template::render("post/title", &context)
}

#[get("/blog")] // List of blog posts with date/title
pub fn blog(conn: DbConn) -> Template {
    let mut context = Context::new();
    context.insert("posts", &Post::read(&conn).unwrap());
    Template::render("post/blog", &context)
}

#[get("/projects")] // List of project posts with date/title
pub fn projects() -> Template {
    let context = Context::new();
    Template::render("post/projects", &context)
}

#[get("/category/<category>")] // List of blog posts by category
pub fn by_category(category: String) -> Template {
    let mut context = Context::new();
    context.insert("category", &category);
    Template::render("post/category", &context)
}

// REST APIs --------------------------------------------------------

#[post("/", format = "json", data = "<post>")]
pub fn create(conn: DbConn, post: Json<Post>) -> JsonValue {
    match post.create(&conn) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

// TODO Add search API
// TODO Add get post by category API

#[get("/", format = "json")] // TODO Add filters/pagination
pub fn get_all(conn: DbConn) -> JsonValue {
    match Post::read(&conn) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get(conn: DbConn, id: i32) -> JsonValue {
    match Post::get(id, &conn) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

#[put("/", format = "json", data = "<post>")]
pub fn update(conn: DbConn, post: Json<Post>) -> JsonValue {
    match post.update(&conn) {
        Ok(u) => json_success(u),
        Err(e) => json_error(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete(conn: DbConn, id: i32) -> JsonValue {
    match Post::delete(id, &conn) {
        Ok(n) => json_success(n),
        Err(e) => json_error(e),
    }
}
