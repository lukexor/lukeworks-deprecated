#![feature(proc_macro_hygiene, decl_macro)]
#![allow(clippy::needless_pass_by_value)]

// TODO Remove extern crate when diesel fixes it
// https://github.com/diesel-rs/diesel/pull/1956
#[macro_use] extern crate diesel;

use rocket::{Rocket, routes};
use rocket_contrib::{
    templates::Template,
    serve::StaticFiles,
};


mod db;
mod schema;
mod models;
mod routes;
mod response;

use db::DbConn;
use routes::{
    root::*,
    admin,
    post,
    account,
    category,
};

fn main() {
    rocket().launch();
}

fn rocket() -> Rocket {
    rocket::ignite()
        .attach(DbConn::fairing())
        .attach(Template::fairing())
        .mount("/static", StaticFiles::from("static/"))
        .mount("/", routes![
               index, search, about, contact, post::by_title,
               post::blog, post::projects, post::by_category
        ])
        .mount("/admin/", routes![
               admin::index, admin::redirect, admin::login
        ])
        .mount("/admin/post", routes![
               post::create, post::get_all, post::get,
               post::update, post::delete
        ])
        .mount("/admin/account", routes![
               account::create, account::get_all, account::get,
               account::update, account::delete
        ])
        .mount("/admin/category", routes![
               category::create, category::get_all, category::get,
               category::update, category::delete
        ])
}
