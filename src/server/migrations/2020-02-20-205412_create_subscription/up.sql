CREATE TABLE subscription(
    id SERIAL PRIMARY KEY,
    account_id INTEGER NOT NULL REFERENCES account (id),
    post_id INTEGER REFERENCES post (id),
    comment_id INTEGER REFERENCES comment (id),
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    updated TIMESTAMP NOT NULL DEFAULT NOW()
);
