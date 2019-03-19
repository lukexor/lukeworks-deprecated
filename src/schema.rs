table! {
    account (id) {
        id -> Nullable<Int4>,
        email -> Varchar,
        full_name -> Varchar,
        password -> Varchar,
        password_updated -> Timestamp,
        website -> Nullable<Varchar>,
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
        id -> Nullable<Int4>,
        name -> Varchar,
        parent_id -> Nullable<Int4>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    post (id) {
        id -> Nullable<Int4>,
        title -> Varchar,
        body -> Text,
        category_id -> Int4,
        author_id -> Int4,
        parent_id -> Nullable<Int4>,
        minutes_to_read -> Int2,
        published -> Bool,
        published_at -> Nullable<Timestamp>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

joinable!(post -> account (author_id));
joinable!(post -> category (category_id));

allow_tables_to_appear_in_same_query!(account, category, post,);
