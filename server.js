require("dotenv").config();
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/web");
const connection = require("./src/config/database");
const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

// Route
app.use("/", webRoutes);

// test connection

// query
// connection.query("select * from Users u;", function (err, results, fields) {
//   console.log("results", results), console.log("err", err);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
