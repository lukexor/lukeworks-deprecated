#![allow(unused_imports)]

table! {
    use diesel::sql_types::*;
    use crate::sql_types::*;

    account (id) {
        id -> Int4,
        user_id -> Int4,
        password -> Nullable<Varchar>,
        password_updated -> Nullable<Timestamp>,
        bio -> Nullable<Text>,
        phone -> Nullable<Varchar>,
        avatar -> Nullable<Varchar>,
        role -> Account_role,
        last_login -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        is_active -> Bool,
        created -> Timestamp,
        updated -> Timestamp,
    }
}

table! {
    use diesel::sql_types::*;
    use crate::sql_types::*;

    app_user (id) {
        id -> Int4,
        name -> Varchar,
        email -> Varchar,
        website -> Nullable<Varchar>,
        is_deleted -> Bool,
        created -> Timestamp,
        updated -> Timestamp,
    }
}

table! {
    use diesel::sql_types::*;
    use crate::sql_types::*;

    category (id) {
        id -> Int4,
        name -> Varchar,
    }
}

table! {
    use diesel::sql_types::*;
    use crate::sql_types::*;

    comment (id) {
        id -> Int4,
        content -> Text,
        likes -> Int4,
        flags -> Int4,
        parent_id -> Nullable<Int4>,
        author_id -> Nullable<Int4>,
        post_id -> Int4,
        is_deleted -> Bool,
        created -> Timestamp,
        updated -> Timestamp,
    }
}

table! {
    use diesel::sql_types::*;
    use crate::sql_types::*;

    post (id) {
        id -> Int4,
        title -> Varchar,
        permalink -> Varchar,
        content -> Text,
        likes -> Int4,
        category_id -> Nullable<Int4>,
        author_id -> Int4,
        minutes_to_read -> Int2,
        published_at -> Nullable<Timestamp>,
        created -> Timestamp,
        updated -> Timestamp,
    }
}

table! {
    use diesel::sql_types::*;
    use crate::sql_types::*;

    post_tag (post_id, tag_id) {
        post_id -> Int4,
        tag_id -> Int4,
    }
}

table! {
    use diesel::sql_types::*;
    use crate::sql_types::*;

    project (id) {
        id -> Int4,
        post_id -> Int4,
        website -> Nullable<Varchar>,
        started -> Date,
        completed -> Nullable<Date>,
    }
}

table! {
    use diesel::sql_types::*;
    use crate::sql_types::*;

    subscription (id) {
        id -> Int4,
        account_id -> Int4,
        post_id -> Nullable<Int4>,
        comment_id -> Nullable<Int4>,
        created -> Timestamp,
        updated -> Timestamp,
    }
}

table! {
    use diesel::sql_types::*;
    use crate::sql_types::*;

    tag (id) {
        id -> Int4,
        name -> Varchar,
    }
}

joinable!(account -> app_user (user_id));
joinable!(comment -> app_user (author_id));
joinable!(comment -> post (post_id));
joinable!(post -> account (author_id));
joinable!(post -> category (category_id));
joinable!(post_tag -> post (post_id));
joinable!(post_tag -> tag (tag_id));
joinable!(project -> post (post_id));
joinable!(subscription -> account (account_id));
joinable!(subscription -> comment (comment_id));
joinable!(subscription -> post (post_id));

allow_tables_to_appear_in_same_query!(
    account,
    app_user,
    category,
    comment,
    post,
    post_tag,
    project,
    subscription,
    tag,
);
