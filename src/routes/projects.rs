use rocket::get;
use rocket_contrib::templates::Template;
use tera::Context;

#[get("/maze-astar")]
pub fn maze_astar() -> Template {
    let mut context = Context::new();
    context.insert("title", "Maze Generation and A* Search");
    context.insert("jsfile", "maze_astar.js");
    context.insert("cssfile", "maze_astar.css");
    Template::render("projects/p5js/maze_astar", &context)
}

#[get("/matrix")]
pub fn matrix() -> Template {
    let mut context = Context::new();
    context.insert("title", "The Matrix Has You");
    context.insert("jsfile", "matrix.js");
    Template::render("projects/p5js", &context)
}

#[get("/fireworks")]
pub fn fireworks() -> Template {
    let mut context = Context::new();
    context.insert("title", "Fireworks");
    context.insert("jsfile", "fireworks.js");
    Template::render("projects/p5js", &context)
}

#[get("/raycasting_2d")]
pub fn raycasting_2d() -> Template {
    let mut context = Context::new();
    context.insert("title", "2D Raycasting");
    context.insert("jsfile", "raycasting_2d.js");
    Template::render("projects/p5js", &context)
}
