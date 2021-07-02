with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "node";
  buildInputs = [
    nodejs-16_x
    postgresql_13 # 14 still in beta
    postgis
  ];
  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"

    echo "SELECT 'CREATE DATABASE db' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'db')\gexec" | psql

    export DATABASE_URL="postgres://postgres@localhost/db"
    export PGDATABASE=db

    echo "CREATE EXTENSION IF NOT EXISTS postgis" | psql
    
  '';
}