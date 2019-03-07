use rocket::get;

#[get("/?<s>")]  // Landing page/optional search
pub fn index(s: Option<String>) -> String {
    s.map(|s| format!("Hi, {}!", s))
        .unwrap_or_else(|| "Bob".to_string())
}

#[get("/about")]  // About page
pub fn about() -> &'static str {
    "Hello, about!"
}

#[get("/contact")]  // Contact forms
pub fn contact() -> &'static str {
    "Hello, contact!"
}
