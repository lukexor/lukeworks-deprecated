use rocket_contrib::templates::tera::{to_value, Value};
use serde::ser::{Serialize, SerializeMap, Serializer};
use std::collections::BTreeMap;

#[derive(Debug, Clone, PartialEq)]
pub struct Context {
    data: BTreeMap<String, Value>,
}

impl Context {
    pub fn new() -> Self {
        Self {
            data: BTreeMap::new(),
        }
    }

    pub fn insert<T: Serialize + ?Sized, S: Into<String>>(&mut self, key: S, val: &T) {
        self.data.insert(key.into(), to_value(val).unwrap());
    }

    pub fn extend(&mut self, mut source: Context) {
        self.data.append(&mut source.data);
    }
}

impl Default for Context {
    fn default() -> Context {
        Context::new()
    }
}

impl Serialize for Context {
    fn serialize<S: Serializer>(&self, serializer: S) -> Result<S::Ok, S::Error> {
        let mut map = serializer.serialize_map(Some(self.data.len()))?;
        for (k, v) in &self.data {
            map.serialize_key(&k)?;
            map.serialize_value(&v)?;
        }
        map.end()
    }
}
