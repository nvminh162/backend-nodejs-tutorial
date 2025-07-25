const express = require("express");
const router = express.Router();
const {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
} = require("../controllers/user.controller");

router.get("/", getHomePage);

router.get("/create", getCreatePage);
router.post("/create", postCreateUser);

router.get("/update/:id", getUpdatePage);
router.post("/update", postUpdateUser);

router.post("/delete/:id", postDeleteUser);

module.exports = router;
