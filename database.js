const mysql = require('mysql');

const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'db-img-indirizzi',
  port:3306
});

conn.connect(function(err) {
  if(err) throw err;
  console.log('Database is connection successfully !');
});

module.exports = conn;
