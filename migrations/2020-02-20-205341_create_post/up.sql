CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    permalink VARCHAR(255) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    likes INTEGER NOT NULL DEFAULT 0,
    category_id INTEGER REFERENCES category (id),
    author_id INTEGER NOT NULL REFERENCES account (id),
    minutes_to_read SMALLINT NOT NULL DEFAULT 0,
    published_at TIMESTAMP,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    updated TIMESTAMP NOT NULL DEFAULT NOW()
);
