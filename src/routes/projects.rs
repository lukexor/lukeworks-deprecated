use rocket::get;
use rocket_contrib::templates::Template;
use tera::Context;

#[get("/maze-astar")]
pub fn maze_astar() -> Template {
    let context = Context::new();
    Template::render("projects/maze_astar", &context)
}

#[get("/matrix")]
pub fn matrix() -> Template {
    let context = Context::new();
    Template::render("projects/matrix", &context)
}

#[get("/fireworks")]
pub fn fireworks() -> Template {
    let context = Context::new();
    Template::render("projects/fireworks", &context)
}
