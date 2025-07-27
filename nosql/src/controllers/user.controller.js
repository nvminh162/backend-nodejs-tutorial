const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../services/user.service");
const User = require("../models/user");

const getHomePage = async (req, res) => {
  let results = [];
  res.render("home", { users: results });
};

const getCreatePage = (req, res) => {
  res.render("create");
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;
  await User.create({
    name,
    email,
    city,
  });
  res.redirect("/");
};

const getUpdatePage = async (req, res) => {
  const id = req.params.id;
  let [results, fields] = await getUserById(id);
  const user = results && results.length > 0 ? results[0] : {};
  console.log(user);
  res.render("update", { user });
};

const postUpdateUser = async (req, res) => {
  const { id, email, name, city } = req.body;
  let [results, fields] = await updateUser(id, email, name, city);
  console.log(results);
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const id = req.params.id;
  let [results, fields] = await deleteUser(id);
  console.log(results);
  res.redirect("/");
};
module.exports = {
  getHomePage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
};
