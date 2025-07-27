require("dotenv").config();
const mongoose = require("mongoose");

const dbState = [
  { value: 0, label: "disconnected" },
  { value: 1, label: "connected" },
  { value: 2, label: "connecting" },
  { value: 3, label: "disconnecting" },
];

const connection = async () => {
  try {
    await mongoose.connect("mongodb://root:123456@localhost:27018");
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value === state).label, "to db"); // connected to db
  } catch (error) {
    console.err(" >>> error ", error);
  }
};

module.exports = connection;
