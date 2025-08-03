const User = require("../models/user");

const getAllUsers = async () => {
  return await User.find({});
};

const createUser = async (email, name, city) => {
  return await User.create({ email, name, city });
};

const getUserById = async (id) => {
  return await User.findById(id).exec();
};

const updateUser = async (id, email, name, city) => {
  return await User.updateOne(
    { _id: id },
    { email: email, name: name, city: city }
  );
};

const deleteUser = async (id) => {
  try {
    return await User.deleteById(id);
  } catch (error) {
    return null;
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
