CREATE TABLE author (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  full_name VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  password_updated TIMESTAMP NOT NULL DEFAULT NOW(),
  website VARCHAR,
  gravatar VARCHAR,
  phone VARCHAR,
  bio TEXT,
  is_admin BOOLEAN NOT NULL DEFAULT 'f',
  is_staff BOOLEAN NOT NULL DEFAULT 'f',
  is_active BOOLEAN NOT NULL DEFAULT 't',
  last_login TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
)
