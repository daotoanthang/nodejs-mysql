const connection = require("../config/database");
const {
  getAllUsers,
  getUsersById,
  deleteUserById,
  createUser,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  const results = await getAllUsers();
  console.log(results);

  res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  return res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  // let{email,name,city} = req.body;

  console.log("email = ", email, "name = ", name, "city = ", city);
  // connection.query(
  //   `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send(`Create user succeed !`);
  //   }
  // );

  const results = await createUser(email, name, city);
  console.log(">>check results", results);
  res.send(`Create user succeed !`);

  // const [results, fields] = await connection.query("select * from Users u");
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  const results = await getUsersById(userId);
  console.log(">>> check results", results);
  let user = results && results.length > 0 ? results[0] : {};
  return res.render("edit.ejs", { user: user });
};

const postUpdatePage = async (req, res) => {
  console.log(req.body);
  let userId = req.body.userId;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let [results, fields] = await connection.query(
    `UPDATE Users SET email = ?, name = ?, city= ? WHERE id = ?`,
    [email, name, city, userId]
  );
  res.send(`Updated user succeed !`);
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await getUsersById(userId);
  res.render("delete.ejs", { user: user[0] });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  console.log(id);
  await deleteUserById(id);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postDeleteUser,
  postUpdatePage,
  postHandleRemoveUser,
};
