use crate::models::{
    category::*,
};
use rocket::{
    get,
    post,
    put,
    delete,
};
use rocket_contrib::json::Json;

#[post("/", format = "json", data = "<category>")]
pub fn create_category(category: Json<NewCategory>) -> Json<NewCategory> {
    category
}
#[get("/")]
pub fn get_all_categories() -> String {
    format!("Read category list")
}
#[get("/<id>")]
pub fn get_category(id: i32) -> String {
    format!("Read category {}", id)
}
#[put("/<id>")]
pub fn update_category(id: i32) -> String {
    format!("Updated category {}", id)
}
#[delete("/<id>")]
pub fn delete_category(id: i32) -> String {
    format!("Deleted category {}", id)
}
