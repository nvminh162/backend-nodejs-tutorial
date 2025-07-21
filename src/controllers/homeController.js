const connection = require("../config/database");

const getHomePage = (req, res) => {
  res.render("home");
};

const postCreateUser = (req, res) => {
  const { email, name, city } = req.body
  connection.query(
    `
    INSERT INTO Users (email, name, city)
    VALUES (?,?,?)
    `,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send('Success')
    }
  )
};

module.exports = {
  getHomePage,
  postCreateUser,
};
