use crate::models::{
    post::*,
    // author::*,
    // category::*,
};
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::Json;

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
pub fn create_post(post: Json<NewPost>) -> Json<NewPost> {
    post
}

// TODO Add search
#[get("/", format = "json")]  // TODO Add filters/pagination
pub fn get_all_posts() -> String {
    format!("Read blog list")
}

#[get("/<id>")]
pub fn get_post(id: i32) -> String {
    format!("Read blog {}", id)
}

#[put("/<id>")]
pub fn update_post(id: i32) -> String {
    format!("Updated {}", id)
}

#[delete("/<id>")]
pub fn delete_post(id: i32) -> String {
    format!("Deleted {}", id)
}
