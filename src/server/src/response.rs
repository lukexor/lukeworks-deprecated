use rocket_contrib::{json, json::JsonValue};
use serde::{Deserialize, Serialize};
use std::fmt;

#[derive(Serialize, Deserialize)]
pub struct Success<T>(T);

#[derive(Serialize, Deserialize)]
pub struct Error {
    pub json_error: String,
}

pub fn json_success<T: Serialize>(d: T) -> JsonValue {
    json!(Success(d))
}
pub fn json_error<T: fmt::Display>(e: T) -> JsonValue {
    json!(Error {
        json_error: e.to_string()
    })
}
