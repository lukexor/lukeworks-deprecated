#[cfg(test)]
mod account_tests {
    use crate::db::test_connection;
    use crate::models::account::*;
    use bcrypt::{DEFAULT_COST, hash};
    use fake::*;

    fn new_account() -> NewAccount {
        let email = fake!(Internet.safe_email);
        let full_name = fake!(Name.name);
        let password = hash(fake!(Company.buzzword), DEFAULT_COST).unwrap();
        NewAccount::new(&email, &full_name, &password)
    }

    #[test]
    fn create() {
        let conn = test_connection();
        let new_account = new_account();
        let actual_account = new_account.create(&conn).unwrap();
        let expected_account = Account {
            id: actual_account.id,
            email: new_account.email,
            full_name: new_account.full_name,
            password: new_account.password,
            password_updated: actual_account.password_updated,
            website: None,
            phone: None,
            bio: None,
            is_admin: false,
            is_staff: false,
            is_active: true,
            last_login: None,
            created_at: actual_account.created_at,
            updated_at: actual_account.updated_at,
        };
        assert_eq!(expected_account, actual_account);
    }

    #[test]
    fn update() {
        let conn = test_connection();
        let new_account = new_account();
        let mut account = new_account.create(&conn).unwrap();
        let new_full_name = "Updated User";
        account.full_name = new_full_name.into();
        let updated_account = account.update(&conn).unwrap();
        assert_eq!(new_full_name, updated_account.full_name);
    }

    #[test]
    fn get_doesnt_exist() {
        let conn = test_connection();
        let result = Account::get(0, &conn);
        assert!(result.is_err());
        assert_eq!(diesel::result::Error::NotFound, result.err().unwrap());
    }

    #[test]
    fn get_exists() {
        let conn = test_connection();
        let new_account = new_account();
        let expected_account = new_account.create(&conn).unwrap();
        let actual_account = Account::get(expected_account.id, &conn).unwrap();
        assert_eq!(expected_account, actual_account);
    }

    #[test]
    fn read_zero() {
        let conn = test_connection();
        let account_list = Account::read(&conn).unwrap();
        assert!(account_list.is_empty());
    }

    #[test]
    fn read_one() {
        let conn = test_connection();
        let new_account = new_account();
        let expected_account = new_account.create(&conn).unwrap();
        let account_list = Account::read(&conn).unwrap();
        assert_eq!(1, account_list.len());
        assert_eq!(expected_account, account_list[0]);
    }

    #[test]
    fn read_multiple() {
        let conn = test_connection();
        let new_account1 = new_account();
        let new_account2 = new_account();
        let expected_account1 = new_account1.create(&conn).unwrap();
        let expected_account2 = new_account2.create(&conn).unwrap();
        let account_list = Account::read(&conn).unwrap();
        assert_eq!(2, account_list.len());
        assert_eq!(expected_account1, account_list[0]);
        assert_eq!(expected_account2, account_list[1]);
    }

    #[test]
    fn delete_doesnt_exist() {
        let conn = test_connection();
        let delete_count = Account::delete(0, &conn).unwrap();
        assert_eq!(0, delete_count);
    }

    #[test]
    fn delete_exists() {
        let conn = test_connection();
        let new_account = new_account();
        let account = new_account.create(&conn).unwrap();
        let delete_count = Account::delete(account.id, &conn).unwrap();
        assert_eq!(1, delete_count);
    }
}

#[cfg(test)]
mod category_tests {
    use crate::db::test_connection;
    use crate::models::category::*;
    use fake::*;

    fn new_category() -> NewCategory {
        let name = fake!(Name.name);
        NewCategory::new(&name)
    }

    #[test]
    fn create() {
        let conn = test_connection();
        let new_category = new_category();
        let actual_category = new_category.create(&conn).unwrap();
        let expected_category = Category {
            id: actual_category.id,
            name: new_category.name,
            created_at: actual_category.created_at,
            updated_at: actual_category.updated_at,
        };
        assert_eq!(expected_category, actual_category);
    }

    #[test]
    fn update() {
        let conn = test_connection();
        let new_category = new_category();
        let mut category = new_category.create(&conn).unwrap();
        let new_name = "Updated Category";
        category.name = new_name.into();
        let updated_category = category.update(&conn).unwrap();
        assert_eq!(new_name, updated_category.name);
    }

    #[test]
    fn get_doesnt_exist() {
        let conn = test_connection();
        let result = Category::get(1, &conn);
        assert!(result.is_err());
        assert_eq!(diesel::result::Error::NotFound, result.err().unwrap());
    }

    #[test]
    fn get_exists() {
        let conn = test_connection();
        let new_category = new_category();
        let expected_category = new_category.create(&conn).unwrap();
        let actual_category = Category::get(expected_category.id, &conn).unwrap();
        assert_eq!(expected_category, actual_category);
    }

    #[test]
    fn read_zero() {
        let conn = test_connection();
        let category_list = Category::read(&conn).unwrap();
        assert!(category_list.is_empty());
    }

    #[test]
    fn read_one() {
        let conn = test_connection();
        let new_category = new_category();
        let expected_category = new_category.create(&conn).unwrap();
        let category_list = Category::read(&conn).unwrap();
        assert_eq!(1, category_list.len());
        assert_eq!(expected_category, category_list[0]);
    }

    #[test]
    fn read_multiple() {
        let conn = test_connection();
        let new_category1 = new_category();
        let expected_category1 = new_category1.create(&conn).unwrap();
        let new_category2 = new_category();
        let expected_category2 = new_category2.create(&conn).unwrap();
        let category_list = Category::read(&conn).unwrap();
        assert_eq!(2, category_list.len());
        assert_eq!(expected_category1, category_list[0]);
        assert_eq!(expected_category2, category_list[1]);
    }

    #[test]
    fn delete_doesnt_exist() {
        let conn = test_connection();
        let delete_count = Category::delete(1, &conn).unwrap();
        assert_eq!(0, delete_count);
    }

    #[test]
    fn delete_exists() {
        let conn = test_connection();
        let new_category = new_category();
        let category = new_category.create(&conn).unwrap();
        let delete_count = Category::delete(category.id, &conn).unwrap();
        assert_eq!(1, delete_count);
    }
}

#[cfg(test)]
mod post_tests {
    use crate::db::test_connection;
    use crate::models::{post::*, category::*, account::*};
    use fake::*;

    fn new_post(conn: &DbConn) -> NewPost {
        let title = fake!(Lorem.sentence(2, 5));
        let body = fake!(Lorem.paragraph(5, 5));
        let category_id = Category::read(conn).unwrap().first().unwrap().id;
        let author_id = Account::read(conn).unwrap().first().unwrap().id;
        NewPost::new(&title, &body, category_id, author_id)
    }

    #[test]
    fn create() {
        let conn = test_connection();
        let category_id = Category::read(&conn).unwrap().first().unwrap().id;
        assert_eq!(1, category_id);
        let new_post = new_post(&conn);
        let actual_post = new_post.create(&conn).unwrap();
        let expected_post = Post {
            id: actual_post.id,
            title: new_post.title,
            body: new_post.body,
            category_id: 1,
            author_id: 1,
            minutes_to_read: 1,
            published: false,
            published_at: None,
            created_at: actual_post.created_at,
            updated_at: actual_post.updated_at,
        };
        assert_eq!(expected_post, actual_post);
    }

    #[test]
    fn update() {
        let conn = test_connection();
        let new_post = new_post(&conn);
        let mut post = new_post.create(&conn).unwrap();
        let new_title = "Updated Post";
        post.title = new_title.into();
        let updated_post = post.update(&conn).unwrap();
        assert_eq!(new_title, updated_post.title);
    }

    #[test]
    fn get_doesnt_exist() {
        let conn = test_connection();
        let result = Post::get(1, &conn);
        assert!(result.is_err());
        assert_eq!(diesel::result::Error::NotFound, result.err().unwrap());
    }

    #[test]
    fn get_exists() {
        let conn = test_connection();
        let new_post = new_post(&conn);
        let expected_post = new_post.create(&conn).unwrap();
        let actual_post = Post::get(expected_post.id, &conn).unwrap();
        assert_eq!(expected_post, actual_post);
    }

    #[test]
    fn read_zero() {
        let conn = test_connection();
        let post_list = Post::read(&conn).unwrap();
        assert!(post_list.is_empty());
    }

    #[test]
    fn read_one() {
        let conn = test_connection();
        let new_post = new_post(&conn);
        let expected_post = new_post.create(&conn).unwrap();
        let post_list = Post::read(&conn).unwrap();
        assert_eq!(1, post_list.len());
        assert_eq!(expected_post, post_list[0]);
    }

    #[test]
    fn read_multiple() {
        let conn = test_connection();
        let new_post1 = new_post(&conn);
        let expected_post1 = new_post1.create(&conn).unwrap();
        let new_post2 = new_post(&conn);
        let expected_post2 = new_post2.create(&conn).unwrap();
        let post_list = Post::read(&conn).unwrap();
        assert_eq!(2, post_list.len());
        assert_eq!(expected_post1, post_list[0]);
        assert_eq!(expected_post2, post_list[1]);
    }

    #[test]
    fn delete_doesnt_exist() {
        let conn = test_connection();
        let delete_count = Post::delete(1, &conn).unwrap();
        assert_eq!(0, delete_count);
    }

    #[test]
    fn delete_exists() {
        let conn = test_connection();
        let new_post = new_post(&conn);
        let post = new_post.create(&conn).unwrap();
        let delete_count = Post::delete(post.id, &conn).unwrap();
        assert_eq!(1, delete_count);
    }
}
