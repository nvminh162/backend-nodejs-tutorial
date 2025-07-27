require("dotenv").config();
const express = require("express"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const kitten = require("./models/kitten")

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME; // hostname

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//config view engine
configViewEngine(app);

// config routes
app.use("/", webRoutes);

const cat = new kitten({ name: 'nvminh162 own cat MODEL' });
cat.save();

(async () => {
  // test connection
  await connection();
  app.listen(port, hostname, () => {
    console.log(`Backend @nvminh162 listening on port ${port}`);
  });
})();
