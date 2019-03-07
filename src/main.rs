#![feature(proc_macro_hygiene, decl_macro)]

// TODO Remove extern crate when diesel fixes it
#[macro_use] extern crate diesel;

use rocket::routes;
use rocket_contrib::database;

// pub mod database;
mod schema;
mod models;
mod routes;

use routes::{
    root::*,
    admin::*,
    post::*,
    author::*,
    category::*,
};

#[database("luke_web")]
pub struct DbConn(pub diesel::PgConnection);

fn main() {
    rocket::ignite()
        .attach(DbConn::fairing())
        .mount("/", routes![
               index, about, contact, admin, admin_redirect, login,
               title, blog, projects, post_by_category
        ])
        .mount("/admin/post", routes![
               create_post, get_all_posts, get_post,
               update_post, delete_post
        ])
        .mount("/admin/author", routes![
               create_author, get_all_authors, get_author,
               update_author, delete_author
        ])
        .mount("/admin/category", routes![
               create_category, get_all_categories, get_category,
               update_category, delete_category
        ])
        .launch();
}
