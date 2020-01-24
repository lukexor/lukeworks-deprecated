#![allow(clippy::single_match_else)]
use rocket::get;
use rocket_contrib::templates::Template;
use tera::Context;

#[get("/?<s>")] // Landing page/optional search
pub fn index(s: Option<String>) -> Template {
    if let Some(s) = s {
        let mut context = Context::new();
        context.insert("search", &s);
        Template::render("root/search", &context)
    } else {
        Template::render("root/index", Context::new())
    }
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

#[get("/resume")] // Resume
pub fn resume() -> Template {
    let context = Context::new();
    Template::render("root/resume", &context)
}
