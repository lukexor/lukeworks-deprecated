CREATE TABLE post (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL UNIQUE,
  body TEXT NOT NULL,
  category_id INTEGER NOT NULL REFERENCES category (id),
  author_id INTEGER NOT NULL REFERENCES account (id),
  minutes_to_read SMALLINT NOT NULL DEFAULT 0,
  is_project BOOLEAN NOT NULL DEFAULT 'f',
  published BOOLEAN NOT NULL DEFAULT 'f',
  published_at TIMESTAMP NOT NULL DEFAULT NOW(),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
)
