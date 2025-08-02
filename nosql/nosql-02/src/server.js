const express = require("express"); // commonjs
const fileUpload = require("express-fileupload");
const connection = require("./config/database");
const apiRoutes = require("./routes/api");
require("dotenv").config();

const APP = express(); // app express
const PORT = process.env.PORT || 8888; // port
const HOSTNAME = process.env.HOST_NAME; // hostname

// config req.body
APP.use(express.json()); // Used to parse JSON bodies
APP.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// req => res
// view => routes => (req) => controller => service => view
// view => routes => req.files => controller => service => view
APP.use(fileUpload());

// config routes
APP.use("/v1/api", apiRoutes);

(async () => {
  await connection();
  APP.listen(PORT, HOSTNAME, () => {
    console.log(`Backend Server @nvminh162 listening on port: ${PORT}`);
  });
})();
