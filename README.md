---Combining JS promises with PostgreSQL Queries---

npm init -y 
npm install pg-promise
touch server.js 
Configure server in server.js file:
        const config = {
   host: 'localhost',
   port: 5432,
   database: 'name of your database',
   user: 'postgres'
};
Initializing the library pgp library and declaring db as our server "config":
    const pgp = require('pg-promise')();
    const db = pgp(config);

Then use promises to query the db syntax is like a fetch. .query is the basic method
Other basic methods: 
    .one
    .none
    .oneOrNone
    .many
    .manyOrNone=any
    .result
    etc
documentation on methods and usage: https://www.npmjs.com/package/pg-promise#usage