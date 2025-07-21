const connection = require("../config/database");

const getHomePage = (req, res) => {
  res.render("home");
};

const postCreateUser = (req, res) => {
  console.log(req.body);
};

module.exports = {
  getHomePage,
  postCreateUser,
};
