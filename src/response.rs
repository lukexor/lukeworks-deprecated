use std::fmt::Display;
use serde::{Serialize, Deserialize};
use rocket_contrib::json;
use rocket_contrib::json::JsonValue;

#[derive(Serialize, Deserialize)]
pub struct SuccessResponse<T> {
    pub data: T,
}
#[derive(Serialize, Deserialize)]
pub struct ErrorResponse {
    pub json_error: String,
}

pub fn json_success<T: Serialize>(d: T) -> JsonValue {
    json!(SuccessResponse { data: d })
}

pub fn json_error<T: Display>(e: T) -> JsonValue {
    json!(ErrorResponse { json_error: e.to_string() })
}
