// // Set up MySQL connection.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "us-cdbr-iron-east-03.cleardb.net",
//   user: "b204e93cac7161",
//   password: "cad08e55",
//   database: "heroku_fcbb3d9e4d63f93",
//   connectionLimit: 5
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;



var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 5,
  host            : 'us-cdbr-iron-east-03.cleardb.net',
  user            : 'b204e93cac7161',
  password        : 'cad08e55',
  database        : 'heroku_fcbb3d9e4d63f93'
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports= pool;