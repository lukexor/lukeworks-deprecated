#![feature(proc_macro_hygiene, decl_macro)]

// TODO Remove extern crate when diesel fixes it
// https://github.com/diesel-rs/diesel/pull/1956
#[macro_use]
extern crate diesel;

use rocket::{routes, Rocket};
use rocket_contrib::{serve::StaticFiles, templates::Template};

#[macro_use]
mod db;
mod models;
mod response;
mod routes;
mod schema;

use db::DbConn;
use routes::{account, admin, category, post, root::*};

pub fn rocket() -> Rocket {
    rocket::ignite()
        .attach(DbConn::fairing())
        .attach(Template::fairing())
        .mount("/static", StaticFiles::from("static/"))
        .mount(
            "/",
            routes![
                index,
                about,
                contact,
                resume,
                post::by_title,
                post::blog,
                post::projects,
                post::by_category
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
