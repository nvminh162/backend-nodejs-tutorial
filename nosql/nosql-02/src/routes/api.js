const express = require("express");
const {
  postUploadSingleFileAPI,
  postUploadMultipleFilesAPI,
} = require("../controllers/file.controller");
const {
  getCustomersAPI,
  putUpdateCustomersAPI,
  postCreateCustomerAPI,
  postCreateArrayCustomersAPI,
  deleteACustomerAPI,
  deleteArrayCustomerAPI,
} = require("../controllers/customer.controller");
const { postCreateProjectAPI, getProjectsAPI } = require("../controllers/project.controller");
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI } = require("../controllers/user.controller");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
  res.send("Hello, World! - API from @nvminh162 with love <3");
});

routerAPI.post("/file", postUploadSingleFileAPI);
routerAPI.post("/files", postUploadMultipleFilesAPI);

// user
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users/:id", deleteUserAPI);

// Customer
routerAPI.get("/customers", getCustomersAPI);
routerAPI.post("/customers", postCreateCustomerAPI);
routerAPI.post("/customers-many", postCreateArrayCustomersAPI);
routerAPI.put("/customers", putUpdateCustomersAPI);
routerAPI.delete("/customers", deleteACustomerAPI);
routerAPI.delete("/customers-many", deleteArrayCustomerAPI);

// Project
routerAPI.get("/projects", getProjectsAPI)
routerAPI.post("/projects", postCreateProjectAPI)

// Test Params Request from POSTMAN
routerAPI.get("/info", (req, res) => {
  res.status(200).json({
    EC: 0,
    data: req.query,
  });
});

module.exports = routerAPI;
