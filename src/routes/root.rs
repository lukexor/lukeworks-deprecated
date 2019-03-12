use rocket::get;
use rocket_contrib::templates::Template;
use tera::Context;

#[get("/?<s>")]  // Landing page/optional search
pub fn index(s: Option<String>) -> Template {
    let mut context = Context::new();
    match s {
        Some(s) => context.insert("message", &s),
        None    => context.insert("message", "Main page"),
    };
    Template::render("base", &context)
}

#[get("/about")]  // About page
pub fn about() -> &'static str {
    "Hello, about!"
}

#[get("/contact")]  // Contact forms
pub fn contact() -> &'static str {
    "Hello, contact!"
}
