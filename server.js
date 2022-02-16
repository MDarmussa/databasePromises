const config = {
     host: 'localhost',
     port: 5432,
     database: 'resturant',
     user: 'postgres'
  };

const pgp = require('pg-promise')();
const db = pgp(config);

// console.log(db)


db.query('SELECT * FROM restaurants')
  .then((results) => {
       results.forEach((row) => {
          //   console.log(row);
          //   console.log(row.id, row.name);
       })
  })

  .catch((e) => {
       console.error(e);
  })




  db.one("SELECT * FROM restaurants WHERE name='The Grill'")
  .then((row) => {
          // console.log(row);
          console.log(row.id, row.name); 
})
.catch((e) => {
     console.error(e);
})


db.result("INSERT INTO restaurants VALUES (default, 'burger', 30, 2, 'Japanese', 'fries', TRUE, '2016-09-02 03:00:00');")
.then((result) => {
     // console.log(result)
})


const restaurants = {name: 'Lard Lad Donuts', stars: 5};
const sql = "INSERT INTO restaurants (name, stars) VALUES (${name}, ${stars})"; //{} is an insert dynamic value

db.result(sql, restaurants)
     .then((result) => {
          console.log(result)
     })
     .catch((e) => console.log(e))




pgp.end();
