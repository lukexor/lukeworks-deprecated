use crate::{
    models::user::User,
    response::{json_error, json_success},
    template::Context,
    DbConn,
};
use rocket::{get, post, request::Form, response::Redirect};
use rocket_contrib::{json::JsonValue, templates::Template};
use std::collections::HashMap;
use std::fs::OpenOptions;
use std::io::Write;

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

// Wedding site

#[get("/kateandluke")]
pub fn kateandluke() -> Template {
    let context: HashMap<&str, &str> = HashMap::new();
    Template::render("wedding/kateandluke", &context)
}

#[derive(FromForm, Debug)]
pub struct Rsvp {
    name: String,
    count: u8,
    songs: String,
    food: String,
    rsvp: bool,
}

#[post("/kateandluke/rsvp", data = "<rsvp>")]
pub fn rsvp(rsvp: Form<Rsvp>) -> JsonValue {
    let path = "rsvp.txt";
    match OpenOptions::new().append(true).create(true).open(path) {
        Ok(mut file) => match file.write_all(&format!("{:?}", rsvp).as_bytes()) {
            Ok(_) => {
                println!("RSVP: {:?}", rsvp);
                json_success("Success")
            }
            Err(e) => {
                eprintln!("{:?}", e);
                json_error(format!("Failed to write Rsvp values: {:?}", e))
            }
        },
        Err(e) => {
            eprintln!("{:?}", e);
            json_error(format!("Failed to write Rsvp: {:?}", e))
        }
    }
}
