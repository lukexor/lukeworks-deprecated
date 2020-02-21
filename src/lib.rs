#![feature(proc_macro_hygiene, decl_macro)]

// TODO Remove extern crate when diesel fixes it
// https://github.com/diesel-rs/diesel/pull/1956
#[macro_use]
extern crate diesel;
#[macro_use]
extern crate diesel_derive_enum;

use rocket::{routes, Rocket};
use rocket_contrib::{helmet::SpaceHelmet, serve::StaticFiles, templates::Template};

#[macro_use]
mod db;
mod filters;
mod models;
mod response;
mod routes;
mod schema;
mod sql_types;

use db::DbConn;
use routes::{account, admin, category, post, projects, root::*};

pub fn rocket() -> Rocket {
    rocket::ignite()
        .attach(DbConn::fairing())
        // .attach(SpaceHelmet::default())
        .attach(Template::custom(|engines| {
            engines.tera.register_filter("markdown", filters::markdown);
        }))
        .mount("/static", StaticFiles::from("static/"))
        .mount(
            "/",
            routes![
                index,
                about,
                contact,
                resume,
                resume_pdf,
                post::by_title,
                post::blog,
                post::projects,
                post::by_category
            ],
        )
        // Projects
        .mount(
            "/",
            routes![
                projects::maze_astar,
                projects::matrix,
                projects::fireworks,
                projects::raycasting_2d,
                projects::lorenz_attractor,
                projects::pong,
                projects::asteroids,
                projects::fourier,
            ],
        )
        .mount(
            "/admin/",
            routes![admin::index, admin::redirect, admin::login],
        )
        .mount(
            "/admin/post",
            routes![
                post::create,
                post::get_all,
                post::get,
                post::update,
                post::delete
            ],
        )
        .mount(
            "/admin/account",
            routes![
                account::create,
                account::list,
                account::get,
                account::update,
                account::delete
            ],
        )
        .mount(
            "/admin/category",
            routes![
                category::create,
                category::get_all,
                category::get,
                category::update,
                category::delete
            ],
        )
}
