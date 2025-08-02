const express = require("express");
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFilesAPI,
} = require("../controllers/api.controller");
const {
  getCustomersAPI,
  putUpdateCustomersAPI,
  postCreateCustomerAPI,
  postCreateArrayCustomersAPI,
  deleteACustomerAPI,
  deleteArrayCustomerAPI,
} = require("../controllers/customer.controller");

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

routerAPI.get("/customers", getCustomersAPI);
routerAPI.put("/customers", putUpdateCustomersAPI);
routerAPI.delete("/customers", deleteACustomerAPI);
routerAPI.post("/customers", postCreateCustomerAPI);
routerAPI.post("/customers-many", postCreateArrayCustomersAPI);
routerAPI.delete("/customers-many", deleteArrayCustomerAPI);

routerAPI.get("/info", (req, res) => {
  res.status(200).json({
    EC: 0,
    data: req.query,
  });
});

module.exports = routerAPI;
