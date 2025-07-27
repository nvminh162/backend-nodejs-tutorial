const connection = require("../config/database");

const getAllUsers = async () => {
  return await connection.query("SELECT * FROM Users u");
};

const createUser = async (email, name, city) => {
  return await connection.query(
    `
    INSERT INTO Users (email, name, city)
    VALUES (?,?,?)
    `,
    [email, name, city]
  );
};

const getUserById = async (id) => {
  return await connection.query(
    `
    SELECT * FROM Users WHERE id = ?
    `,
    [id]
  );
};

const updateUser = async (id, email, name, city) => {
  return await connection.query(
    `
    UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?
    `,
    [email, name, city, id]
  );
};

const deleteUser = async (id) => {
  return await connection.query(
    `
    DELETE FROM Users WHERE id = ?
    `,
    [id]
  );
};

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };
