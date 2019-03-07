use crate::*;
use crate::models::post::*;
use crate::schema::post;
use crate::response::*;
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::{Json, JsonValue};
use diesel::{QueryDsl, RunQueryDsl};

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
    let new_post = diesel::insert_into(post::table)
        .values(&post.into_inner())
        .get_result::<Post>(&*conn);
    match new_post {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

// TODO Add search
#[get("/", format = "json")]  // TODO Add filters/pagination
pub fn get_all_posts(conn: DbConn) -> JsonValue {
    let categories = post::table.load::<Post>(&*conn);
    match categories {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get_post(conn: DbConn, id: i32) -> JsonValue {
    let post = post::table.find(id)
        .first::<Post>(&*conn);
    match post {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[put("/<id>", format = "json", data = "<post>")]
pub fn update_post(conn: DbConn, id: i32, post: Json<Post>) -> JsonValue {
    let update = diesel::update(
        post::table.find(id))
        .set(&post.into_inner())
        .get_result::<Post>(&*conn);
    match update {
        Ok(u)  => success_response(u),
        Err(e) => error_response(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete_post(conn: DbConn, id: i32) -> JsonValue {
    let deleted = diesel::delete(
        post::table.find(id))
        .execute(&*conn);
    match deleted {
        Ok(n)  => success_response(n),
        Err(e) => error_response(e),
    }
}
