use crate::{models::user::User, template::Context, DbConn};
use rocket::{get, response::Redirect};
use rocket_contrib::templates::Template;
use std::collections::HashMap;

#[get("/?<s>")] // Landing page/optional search
pub fn index(s: Option<String>) -> Template {
    let mut context: HashMap<&str, &str> = HashMap::new();
    if let Some(s) = s {
        context.insert("search", &s);
        Template::render("root/search", &context)
    } else {
        Template::render("root/index", &context)
    }
}

#[get("/about")] // About page
pub fn about(conn: DbConn) -> Template {
    let mut context = Context::new();
    let (user, account) = User::get_user_account(&conn, 1).unwrap();
    context.insert("user", &user);
    context.insert("account", &account);
    Template::render("root/about", &context)
}

#[get("/contact")] // Contact forms
pub fn contact(conn: DbConn) -> Template {
    let mut context = Context::new();
    let (user, account) = User::get_user_account(&conn, 1).unwrap();
    context.insert("user", &user);
    context.insert("account", &account);
    Template::render("root/contact", &context)
}

#[get("/resume")] // Resume
pub fn resume() -> Template {
    let context: HashMap<&str, &str> = HashMap::new();
    Template::render("root/resume", &context)
}

#[get("/resume.pdf")] // Resume PDF
pub fn resume_pdf() -> Redirect {
    Redirect::temporary("/static/petherbridge_lucas_software_engineer_resume.pdf")
}
