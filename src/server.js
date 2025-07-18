// import exporess from "express"; // es modules
const express = require("express"); // commonjs
const path = require("path");
require('dotenv').config()

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME; // hostname

//config view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config routes
app.get("/", (req, res) => {
  res.render("sample");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
