#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate diesel;

use rocket::{response::NamedFile, routes, Request, Rocket};
use rocket_contrib::{helmet::SpaceHelmet, serve::StaticFiles};
use std::path::{Path};

#[macro_use]
mod db;

mod models;
mod response;
mod routes;
mod schema;
mod sql_types;

use db::DbConn;
use routes::{account, category, post};

const BUILD: &str = "../../build/";
const INDEX: &str = "index.html";

#[catch(404)]
fn not_found(_req: &Request) -> Option<NamedFile> {
    NamedFile::open(Path::new(BUILD).join(INDEX)).ok()
}

pub fn rocket() -> Rocket {
    rocket::ignite()
        .attach(DbConn::fairing())
        .attach(SpaceHelmet::default())
        .mount("/", StaticFiles::from(BUILD).rank(1))
        .register(catchers![not_found])
        .mount(
            "/api/account/",
            routes![
                account::create,
                account::list,
                account::get,
                account::update,
                account::delete,
            ],
        )
        .mount(
            "/api/category/",
            routes![
                category::create,
                category::get_all,
                category::get,
                category::update,
                category::delete,
            ],
        )
        .mount(
            "/api/post/",
            routes![
                post::create,
                post::get_all,
                post::get,
                post::update,
                post::delete
            ],
        )
}
