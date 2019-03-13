use rocket::get;
use rocket_contrib::templates::Template;
use tera::Context;

#[get("/?<s>")]  // Landing page/optional search
pub fn index(s: Option<String>) -> Template {
    let context = Context::new();
    match s {
        Some(s) => s,
        None    => "".to_string(),
    };
    Template::render("index", &context)
}

#[get("/about")]  // About page
pub fn about() -> &'static str {
    "Hello, about!"
}

#[get("/contact")]  // Contact forms
pub fn contact() -> &'static str {
    "Hello, contact!"
}
