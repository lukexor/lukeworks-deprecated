use rocket::get;
use rocket::response::{Redirect};

#[get("/admin")]  // Login to administer website TODO: Auth here
pub fn admin() -> String {
    format!("Hello, {}!", "Bob")
}

#[get("/admin", rank = 2)]  // Failed to auth, redirect to login
pub fn admin_redirect() -> Redirect {
    Redirect::to("/login")
}

#[get("/login")]  // Login page
pub fn login() -> &'static str {
    "Hello, login!"
}
