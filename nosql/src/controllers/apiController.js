const User = require("../models/user");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/user.service");
const {
  uploadSingleFile,
  uploadMultipleFiles,
} = require("../services/file.service");

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

const postUploadSingleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No Files were update");
  }

  let result = await uploadSingleFile(req.files.image); //image from api
  console.log(result);

  // return res.send("OK SINGLE");
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const postUploadMultipleFilesAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No Files were update");
  }

  // console.log(req.files); //check
  // upload single file => files is an object
  // upload multiple files => files is an array
  if (Array.isArray(req.files.image)) {
    //upload multiple
    let result = await uploadMultipleFiles(req.files.image);
    console.log(result);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } else {
    return await postUploadSingleFileAPI(req, res);
  }
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFilesAPI,
};
