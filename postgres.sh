#!/bin/bash

# Set credentials
PGUSER="saincraft"
PGPASSWORD="saincraft2025"
PGDATABASE="postgres" # Change if needed
PGHOST="127.0.0.1"
PGPORT="5432"

# Export the password to use in the session
export PGPASSWORD=$PGPASSWORD

# Run psql login
psql -U "$PGUSER" -h "$PGHOST" -p "$PGPORT" -d "$PGDATABASE"
