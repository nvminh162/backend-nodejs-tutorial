const express = require("express");
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFilesAPI,
} = require("../controllers/api.controller");
const { postCreateCustomer } = require("../controllers/customer.controller");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
  res.send("hello");
});

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileAPI);
routerAPI.post("/files", postUploadMultipleFilesAPI);

routerAPI.post("/customers", postCreateCustomer)

module.exports = routerAPI;
