#!/bin/sh

if [ -z "$DB_USER" ] || [ -z "$DB_PASS" ]; then
  echo "DB_USER and DB_PASS must be defined";
  exit;
else
  echo "Creating database user"
  psql postgres lukepetherbridge -c "\
    CREATE ROLE $DB_USER WITH CREATEDB LOGIN PASSWORD '$DB_PASS'; \
  "

  echo "Setting up database"
  diesel setup
fi
