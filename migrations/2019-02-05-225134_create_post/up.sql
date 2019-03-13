CREATE TABLE post (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL UNIQUE,
  body TEXT NOT NULL,
  category_id INTEGER NOT NULL REFERENCES category (id),
  author_id INTEGER NOT NULL REFERENCES account (id),
  parent_id INTEGER NULL REFERENCES post (id),
  minutes_to_read SMALLINT NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT 'f',
  published_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
)
