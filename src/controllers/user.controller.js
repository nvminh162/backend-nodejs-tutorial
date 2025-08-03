const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/user.service");

const getUsersAPI = async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json({
    errorCode: 0,
    data: users,
  });
};

const postCreateUserAPI = async (req, res) => {
  const { email, name, city } = req.body;
  let user = await createUser(email, name, city);
  res.status(201).json({
    EC: 0,
    data: user,
  });
};

const putUpdateUserAPI = async (req, res) => {
  const { id, email, name, city } = req.body;
  let user = await updateUser(id, email, name, city);
  res.status(201).json({
    EC: 0,
    data: user,
  });
};

const deleteUserAPI = async (req, res) => {
  const id = req.params.id;
  let result = await deleteUser(id);
  res.status(201).json({
    EC: 0,
    data: result,
  });
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
};