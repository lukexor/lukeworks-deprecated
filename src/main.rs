#![feature(proc_macro_hygiene, decl_macro)]

// TODO Remove extern crate when diesel fixes it
#[macro_use] extern crate diesel;

use rocket::{Rocket, routes};
use rocket_contrib::templates::Template;

pub mod db;
pub mod schema;
pub mod models;
pub mod routes;
pub mod response;

use db::DbConn;
use routes::{
    root::*,
    admin::*,
    post::*,
    account::*,
    category::*,
};

fn rocket() -> Rocket {
    rocket::ignite()
        .attach(DbConn::fairing())
        .attach(Template::fairing())
        .mount("/", routes![
               index, about, contact, admin, admin_redirect, login,
               title, blog, projects, post_by_category
        ])
        .mount("/admin/post", routes![
               create_post, get_all_posts, get_post,
               update_post, delete_post
        ])
        .mount("/admin/account", routes![
               create_account, get_all_accounts, get_account,
               update_account, delete_account
        ])
        .mount("/admin/category", routes![
               create_category, get_all_categories, get_category,
               update_category, delete_category
        ])
}

fn main() {
    rocket().launch();
}
