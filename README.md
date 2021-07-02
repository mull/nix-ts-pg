A work in progress template for a Node.js specifically using Nix to handle dependencies.

## Features
### General
- Postgres (13) with Postgis
- Node.js 16
- Typescript

### Node land
- Type safe querying with Slonik & type generation for queries


## Installation
Assuming you have Nix installed, merely check out the project and run:

```
nix-shell # installs all deps and creates the database for you
psql -d db -f migrations/01_*.sql
npm run dev # runs src/index.ts through nodemon
```

## TODO
- [ ] migration tool
- [ ] yarn2nix or similar
- [ ] test setup
- [ ] prettier
- [ ] eslint
- [ ] build and deploy instructions
- [ ] more recommended vscode extensions