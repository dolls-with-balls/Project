const express = require("express");
const {
  signupUser,
  loginUser,
  Verify,
<<<<<<< HEAD
=======
  VerifyUser,
>>>>>>> 244ab5dbe1fec89b047e7b140bcf779401c54819
} = require("../controller/auth.controller");
const {
  deleteUser,
  getUser,
  getUsers,
} = require("../controller/user.controller");

const router = express.Router();

router
  .get("/users", getUsers)
  .get("/user/:id", getUser)
<<<<<<< HEAD
  .get("/verify", Verify)
=======
  .get("/verify", VerifyUser)
>>>>>>> 244ab5dbe1fec89b047e7b140bcf779401c54819
  .post("/signup", signupUser)
  .post("/login", loginUser)
  .delete("/user/:id", deleteUser);

module.exports.userRoutes = router;
