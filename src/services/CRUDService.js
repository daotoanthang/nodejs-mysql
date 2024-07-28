const connection = require("../config/database");
const getAllUsers = async () => {
  const [results, fields] = await connection.query("select * from Users u;");
  return results;
};

const getUsersById = async (id) => {
  const [results, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [id]
  );
  return results;
};

const createUser = async (email, name, city) => {
  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`,
    [email, name, city]
  );
  return results
}

const updateUserById = async (id) => {
 
};

const deleteUserById = async (id) => {
  const [results, fields] = await connection.query(
    "DELETE from Users where id = ?",
    [id]
  );
};

module.exports = {
  getAllUsers,
  getUsersById,
  deleteUserById,
  createUser,
};
