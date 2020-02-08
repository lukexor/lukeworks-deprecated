use crate::{
    models::post::*,
    response::{json_error, json_success},
    DbConn,
};
use rocket::{delete, get, post, put};
use rocket_contrib::{
    json::{Json, JsonValue},
    templates::Template,
};
use tera::Context;

// Pages ------------------------------------------------------------

#[get("/<title>")] // A specific blog post or project by title
pub fn by_title(title: String) -> Template {
    let mut context = Context::new();
    context.insert("title", &title);
    // TODO - See if title exists as either a post or a project, else return 404
    Template::render("http/404", &context)
}

#[get("/blog")] // List of blog posts with date/title
pub fn blog(conn: DbConn) -> Template {
    let mut context = Context::new();
    let mut posts = Post::list(&conn).unwrap();
    posts.reverse();
    context.insert("posts", &posts);
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
pub fn create(conn: DbConn, post: Json<Insert>) -> JsonValue {
    match Post::create(&conn, &post) {
        Ok(a) => json_success(a),
        Err(e) => json_error(e),
    }
}

// TODO Add search API
// TODO Add get post by category API

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

#[put("/", format = "json", data = "<post>")]
pub fn update(conn: DbConn, post: Json<Post>) -> JsonValue {
    match Post::update(&conn, &post) {
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
