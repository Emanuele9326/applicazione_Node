const mysql = require('mysql');

const conn = mysql.createConnection({
  host:'localhost',
  user:'PC',
  password:'Node260793',
  database:'db-img-indirizzi',
  port:3306
});

conn.connect(function(err) {
  if(err) throw err;
  console.log('Database is connection successfully !');
});

module.exports = conn;
