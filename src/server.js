require("dotenv").config();
const express = require("express"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME; // hostname

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PWD,
});

connection.query("select * from Users u", function (err, results, fields) {
  console.log(results, fields);
});

//config view engine
configViewEngine(app);

// config routes
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`App listening on port ${port}`);
});
