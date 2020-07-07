#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;

use rocket::{response::NamedFile, routes, Request, Rocket};
use rocket_contrib::serve::StaticFiles;
use std::path::Path;
// use rocket_contrib::{helmet::SpaceHelmet, serve::StaticFiles, templates::Template};

#[macro_use]
mod db;
// mod filters;
// mod models;
// mod response;
// mod routes;
// mod schema;
// mod sql_types;
// mod template;

// use db::DbConn;
// use routes::{account, admin, category, post, projects, root::*};

const BUILD: &'static str = "../../build/";
const INDEX: &'static str = "index.html";

#[catch(404)]
fn index(_: &Request) -> Option<NamedFile> {
    NamedFile::open(Path::new(BUILD).join(INDEX)).ok()
}

pub fn rocket() -> Rocket {
    rocket::ignite()
        // .attach(DbConn::fairing())
        // .attach(SpaceHelmet::default())
        .mount("/", StaticFiles::from(BUILD))
        .register(catchers![index])
    // .mount("/", routes![index])
    //         //         //     about,
    //         //         //     contact,
    //         //         //     resume,
    //         //         //     resume_pdf,
    //         //         //     kateandluke,
    //         //         //     rsvp,
    //         //         //     post::by_title,
    //         //         //     post::blog,
    //         //         //     post::projects,
    //         //         //     post::by_category
    //         //     ],
    //     ],
    // )
    // Projects
    // .mount(
    //     "/",
    //     routes![
    //         projects::maze_astar,
    //         projects::matrix,
    //         projects::fireworks,
    //         projects::raycasting_2d,
    //         projects::lorenz_attractor,
    //         projects::pong,
    //         projects::asteroids,
    //         projects::fourier,
    //         projects::fluid_simulation,
    //     ],
    // )
    // .mount(
    //     "/admin/",
    //     routes![admin::index, admin::redirect, admin::login],
    // )
    // .mount(
    //     "/admin/post",
    //     routes![
    //         post::create,
    //         post::get_all,
    //         post::get,
    //         post::update,
    //         post::delete
    //     ],
    // )
    // .mount(
    //     "/admin/account",
    //     routes![
    //         account::create,
    //         account::list,
    //         account::get,
    //         account::update,
    //         account::delete
    //     ],
    // )
    // .mount(
    //     "/admin/category",
    //     routes![
    //         category::create,
    //         category::get_all,
    //         category::get,
    //         category::update,
    //         category::delete
    //     ],
    // )
}
