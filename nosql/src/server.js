require("dotenv").config();
const express = require("express"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const apiRoutes = require("./routes/api");
const fileUpload = require("express-fileupload");
const { MongoClient } = require("mongodb");

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME; // hostname

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//config view engine
configViewEngine(app);

// req => res
// view => routes => (req) => controller => service => view
// view => routes => req.files => controller => service => view
app.use(fileUpload());

// config routes
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

(async () => {
  // using mongoose
  // await connection();

  // using mongodb driver
  const URL = process.env.DB_HOST_WITH_DRIVER;
  const client = new MongoClient(URL);
  await client.connect(); 
  console.log('Connected successfully to server');
  // const db = client.db(dbName);
  // const collection = db.collection('documents');

  app.listen(port, hostname, () => {
    console.log(`Backend @nvminh162 listening on port ${port}`);
  });
})();
