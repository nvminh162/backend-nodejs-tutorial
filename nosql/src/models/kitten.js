const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
  name: String,
});

const kitten = mongoose.model("kitten", kittySchema);



module.exports = kitten