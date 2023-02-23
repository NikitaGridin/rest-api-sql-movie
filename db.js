const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movie",
});

conn.connect((error) => {
  if (error) {
    console.log("Error" + error);
  } else {
    console.log("Connected");
  }
});

module.exports = conn;
