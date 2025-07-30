const express = require("express");
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFilesAPI,
} = require("../controllers/apiController");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
  res.send("hello");
});

routerAPI.get("/users", getUsersAPI);

routerAPI.post("/users", postCreateUserAPI);

routerAPI.put("/users", putUpdateUserAPI);

routerAPI.delete("/users/:id", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileAPI);

routerAPI.post("/files", postUploadMultipleFilesAPI);

module.exports = routerAPI;
