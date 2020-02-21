CREATE TABLE post_tag (
    post_id INTEGER REFERENCES post (id),
    tag_id INTEGER REFERENCES tag (id),
    PRIMARY KEY (post_id, tag_id)
);
