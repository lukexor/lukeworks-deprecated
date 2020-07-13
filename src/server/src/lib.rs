#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate diesel;

use rocket::{response::NamedFile, routes, Rocket};
use rocket_contrib::helmet::SpaceHelmet;
use std::path::{Path, PathBuf};

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
const STATIC: &str = "static";
const INDEX: &str = "index.html";

// TODO: Add ?s=<SEARCH>

#[get("/<path..>", rank = 2)]
fn path(path: Option<PathBuf>) -> NamedFile {
    let mut file = PathBuf::from(BUILD);
    match path {
        Some(p) => {
            file.push(p);
            match NamedFile::open(&file) {
                Ok(f) => f,
                Err(_) => {
                    file.set_extension("html");
                    match NamedFile::open(&file) {
                        Ok(f) => f,
                        Err(_) => index(),
                    }
                }
            }
        }
        None => index(),
    }
}

#[get("/")]
fn index() -> NamedFile {
    let base = Path::new(BUILD);
    NamedFile::open(base.join(INDEX)).unwrap()
}

pub fn rocket() -> Rocket {
    rocket::ignite()
        .attach(DbConn::fairing())
        .attach(SpaceHelmet::default())
        .mount("/", routes![index, path])
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
