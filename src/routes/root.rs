#![allow(clippy::single_match_else)]
use rocket::get;
use rocket_contrib::templates::Template;
use tera::Context;

#[get("/")] // Landing page/optional search
pub fn index() -> Template {
    Template::render("root/index", Context::new())
}

#[get("/?<s>")] // Landing page/optional search
pub fn search(s: String) -> Template {
    let mut context = Context::new();
    context.insert("search", &s);
    Template::render("root/search", &context)
}

#[get("/about")] // About page
pub fn about() -> Template {
    let context = Context::new();
    Template::render("root/about", &context)
}

#[get("/contact")] // Contact forms
pub fn contact() -> Template {
    let context = Context::new();
    Template::render("root/contact", &context)
}
