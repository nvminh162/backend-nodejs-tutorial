const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("select * from Users u", function (err, results, fields) {
    users = results;
  });
  console.log("check user ", users);

  res.render("home");
};

module.exports = {
  getHomePage,
};
