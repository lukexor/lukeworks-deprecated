CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    likes INTEGER NOT NULL DEFAULT 0,
    flags INTEGER NOT NULL DEFAULT 0,
    parent_id INTEGER REFERENCES comment (id),
    author_id INTEGER REFERENCES app_user (id),
    post_id INTEGER NOT NULL REFERENCES post (id),
    is_deleted BOOLEAN NOT NULL DEFAULT 'f',
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    updated TIMESTAMP NOT NULL DEFAULT NOW()
);
