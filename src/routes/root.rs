use rocket::get;
use rocket::response::Redirect;
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

#[get("/resume.pdf")] // Resume PDF
pub fn resume_pdf() -> Redirect {
    Redirect::temporary("/static/petherbridge_lucas_software_engineer_resume.pdf")
}
