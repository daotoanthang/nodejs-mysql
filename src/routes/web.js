const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdatePage,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");

router.get("/abc", getABC);

router.get("/", getHomePage);
router.post("/create-user", postCreateUser);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdatePage);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);

module.exports = router;
