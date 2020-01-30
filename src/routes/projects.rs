use rocket::get;
use rocket_contrib::templates::Template;
use tera::Context;

#[get("/maze-astar")] // Resume
pub fn maze_astar() -> Template {
    let context = Context::new();
    Template::render("root/maze_astar", &context)
}

#[get("/matrix")] // Resume
pub fn matrix() -> Template {
    let context = Context::new();
    Template::render("root/matrix", &context)
}
