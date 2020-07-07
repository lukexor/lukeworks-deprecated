CREATE TYPE account_role AS ENUM ('admin', 'staff', 'user');
CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES app_user (id),
    password VARCHAR(255),
    password_updated TIMESTAMP,
    bio TEXT,
    phone VARCHAR(15),
    avatar VARCHAR(2048),
    role account_role NOT NULL DEFAULT 'user',
    last_login TIMESTAMP,
    locked_at TIMESTAMP,
    is_active BOOLEAN NOT NULL DEFAULT 't',
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    updated TIMESTAMP NOT NULL DEFAULT NOW()
);
