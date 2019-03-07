use crate::*;
use crate::models::category::*;
use crate::schema::category;
use crate::response::*;
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::{Json, JsonValue};
use diesel::{QueryDsl, RunQueryDsl};

#[post("/", format = "json", data = "<category>")]
pub fn create_category(conn: DbConn, category: Json<NewCategory>) -> JsonValue {
    let new_category = diesel::insert_into(category::table)
        .values(&category.into_inner())
        .get_result::<Category>(&*conn);
    match new_category {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[get("/", format = "json")]
pub fn get_all_categories(conn: DbConn) -> JsonValue {
    let categories = category::table.load::<Category>(&*conn);
    match categories {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[get("/<id>", format = "json")]
pub fn get_category(conn: DbConn, id: i32) -> JsonValue {
    let category = category::table.find(id)
        .first::<Category>(&*conn);
    match category {
        Ok(a)  => success_response(a),
        Err(e) => error_response(e),
    }
}

#[put("/<id>", format = "json", data = "<category>")]
pub fn update_category(conn: DbConn, id: i32, category: Json<Category>)
  -> JsonValue {
    let update = diesel::update(
        category::table.find(id))
        .set(&category.into_inner())
        .get_result::<Category>(&*conn);
    match update {
        Ok(u)  => success_response(u),
        Err(e) => error_response(e),
    }
}

#[delete("/<id>", format = "json")]
pub fn delete_category(conn: DbConn, id: i32) -> JsonValue {
    let deleted = diesel::delete(
        category::table.find(id))
        .execute(&*conn);
    match deleted {
        Ok(n)  => success_response(n),
        Err(e) => error_response(e),
    }
}
