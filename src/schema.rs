table! {
    author (id) {
        id -> Int4,
        email -> Varchar,
        full_name -> Varchar,
        password -> Varchar,
        password_updated -> Timestamp,
        website -> Nullable<Varchar>,
        gravatar -> Nullable<Varchar>,
        phone -> Nullable<Varchar>,
        bio -> Nullable<Text>,
        is_admin -> Bool,
        is_staff -> Bool,
        is_active -> Bool,
        last_login -> Nullable<Timestamp>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    category (id) {
        id -> Int4,
        name -> Varchar,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    post (id) {
        id -> Int4,
        title -> Varchar,
        body -> Text,
        category_id -> Int4,
        author_id -> Int4,
        minutes_to_read -> Int2,
        is_project -> Bool,
        published -> Bool,
        published_at -> Timestamp,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

joinable!(post -> author (author_id));
joinable!(post -> category (category_id));

allow_tables_to_appear_in_same_query!(
    author,
    category,
    post,
);
