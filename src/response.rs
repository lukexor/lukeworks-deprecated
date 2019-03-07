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
    pub error: String,
}

pub fn success_response<T: Serialize>(d: T) -> JsonValue {
    json!(SuccessResponse { data: d })
}

pub fn error_response<T: Display>(e: T) -> JsonValue {
    json!(ErrorResponse { error: e.to_string() })
}
