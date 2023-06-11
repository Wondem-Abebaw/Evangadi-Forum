const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  createUser,
  getUsers,
  getUserById,
  login,
} = require("./users.controller");

router.post("/", createUser);
router.get("/all", getUsers);
router.get("/", auth, getUserById);
router.post("/login", login);

module.exports = router;
