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

#[get("/raycasting-2d")]
pub fn raycasting_2d() -> Template {
    let mut context = Context::new();
    context.insert("title", "2D Raycasting");
    context.insert("jsfile", "raycasting_2d.js");
    Template::render("projects/p5js", &context)
}

#[get("/lorenz-attractor")]
pub fn lorenz_attractor() -> Template {
    let mut context = Context::new();
    context.insert("title", "Lorenz Attractor");
    context.insert("jsfile", "lorenz_attractor.js");
    Template::render("projects/p5js", &context)
}

#[get("/pong")]
pub fn pong() -> Template {
    let mut context = Context::new();
    context.insert("title", "Pong");
    context.insert("jsfile", "pong.js");
    context.insert("cssfile", "pong.css");
    Template::render("projects/p5js/pong", &context)
}

#[get("/asteroids")]
pub fn asteroids() -> Template {
    let mut context = Context::new();
    context.insert("title", "Asteroids");
    context.insert("jsfile", "asteroids.js");
    Template::render("projects/p5js", &context)
}

#[get("/fourier")]
pub fn fourier() -> Template {
    let mut context = Context::new();
    context.insert("title", "Fourier Transform");
    context.insert("jsfile", "fourier.js");
    Template::render("projects/p5js", &context)
}
