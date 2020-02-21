use rocket::{get, response::Redirect};
use rocket_contrib::templates::Template;
use std::collections::HashMap;

#[get("/admin")] // Login to administer website TODO: Auth here
pub fn index() -> Template {
    let context: HashMap<&str, &str> = HashMap::new();
    Template::render("admin/index", &context)
}

#[get("/admin", rank = 2)] // Failed to auth, redirect to login
pub fn redirect() -> Redirect {
    Redirect::to("/login")
}

#[get("/login")] // Login page
pub fn login() -> Template {
    let context: HashMap<&str, &str> = HashMap::new();
    Template::render("admin/login", &context)
}
