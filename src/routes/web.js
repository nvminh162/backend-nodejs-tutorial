const express = require("express");
const router = express.Router();
const { getHomePage, postCreateUser } = require("../controllers/homeController");

router.get("/", getHomePage);
router.post("/create-user", postCreateUser);

module.exports = router;
