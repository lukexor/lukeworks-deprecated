CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL REFERENCES post (id),
    website VARCHAR(2048),
    started DATE NOT NULL,
    completed DATE
);
