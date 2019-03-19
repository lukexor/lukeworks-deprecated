sed -ri -e 's/(\s)id -> Int4/\1id -> Nullable<Int4>/g' src/schema.rs
