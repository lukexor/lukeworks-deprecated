use std::fmt;
use serde::{Serialize, Deserialize};
use rocket_contrib::json;
use rocket_contrib::json::JsonValue;

#[derive(Serialize, Deserialize)]
pub struct Success<T> {
    pub data: T,
}
#[derive(Serialize, Deserialize)]
pub struct Error{
    pub json_error: String,
}

pub fn json_success<T: Serialize>(d: T) -> JsonValue {
    json!(Success { data: d })
}

pub fn json_error<T: fmt::Display>(e: T) -> JsonValue {
    json!(Error { json_error: e.to_string() })
}
