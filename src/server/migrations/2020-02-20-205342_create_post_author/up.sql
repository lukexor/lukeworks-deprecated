CREATE TABLE post_author (
    post_id INTEGER NOT NULL REFERENCES post (id),
    author_id INTEGER NOT NULL REFERENCES account (id),
    UNIQUE (post_id, author_id),
    PRIMARY KEY (post_id, author_id)
);
