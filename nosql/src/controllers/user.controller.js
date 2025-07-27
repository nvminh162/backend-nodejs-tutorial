const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../services/user.service");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  res.render("home", { users: results });
};

const getCreatePage = (req, res) => {
  res.render("create");
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;
  await createUser(email, name, city);
  res.redirect("/");
};

const getUpdatePage = async (req, res) => {
  const id = req.params.id;
  const user = await getUserById(id);
  console.log(user);
  res.render("update", { user });
};

const postUpdateUser = async (req, res) => {
  const { id, email, name, city } = req.body;
  await updateUser(id, email, name, city);
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const id = req.params.id;
  await deleteUser(id);
  res.redirect("/");
};module.exports = {
  getHomePage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser
};
