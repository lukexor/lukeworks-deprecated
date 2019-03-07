use crate::*;
use crate::models::author::*;
use crate::schema::author;
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::Json;
use diesel::{QueryDsl, RunQueryDsl};

#[post("/", format = "json", data = "<author>")]
pub fn create_author(conn: DbConn, author: Json<NewAuthor>)
  -> Json<Option<Author>> {
    let new_author = diesel::insert_into(author::table)
        .values(&author.into_inner())
        .get_result(&*conn);
    // TODO: Return HTTP 500 on error
    Json(match new_author {
        Ok(a) => Some(a),
        Err(_) => None,
    })
}
#[get("/", format = "json")]
pub fn get_all_authors(conn: DbConn) -> Json<Vec<Author>> {
    let authors = author::table.load::<Author>(&*conn);
    Json(match authors {
        Ok(a)  => a,
        Err(_) => vec!(),
    })
}
#[get("/<id>", format = "json")]
pub fn get_author(conn: DbConn, id: i32) -> Json<Option<Author>> {
    let author = author::table.find(id)
        .first(&*conn);
    Json(match author {
        Ok(a)  => Some(a),
        Err(_) => None,
    })
}
#[put("/<id>", format = "json", data = "<author>")]
pub fn update_author(id: i32, author: Json<Author>) -> String {
    // TODO: Add update fields
    format!("Updated author {}", id)
}
#[delete("/<id>", format = "json")]
pub fn delete_author(conn: DbConn, id: i32) -> String {
    let deleted = diesel::delete(
        author::table.find(id))
        .execute(&*conn);
    // TODO: Return HTTP 500 on error
    match deleted {
        Ok(_)  => "OK".to_string(),
        Err(_) => "FAIL".to_string(),
    }
}
