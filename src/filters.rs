use pulldown_cmark as cmark;
use std::collections::HashMap;
use tera::{to_value, try_get_value, Result as TeraResult, Value};

pub fn markdown_filter(value: Value, args: HashMap<String, Value>) -> TeraResult<Value> {
    let s = try_get_value!("markdown", "value", String, value);
    let inline = match args.get("inline") {
        Some(val) => try_get_value!("markdown", "inline", bool, val),
        None => false,
    };

    let opts = cmark::Options::all();
    let mut html = String::new();
    let parser = cmark::Parser::new_ext(&s, opts);
    cmark::html::push_html(&mut html, parser);

    if inline {
        html = html
            .trim_start_matches("<p>")
            // pulldown_cmark finishes a paragraph with `</p>\n`
            .trim_end_matches("</p>\n")
            .to_string();
    }

    Ok(to_value(&html)?)
}
