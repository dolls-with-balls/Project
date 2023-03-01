const express = require("express");
<<<<<<< HEAD
const { get } = require("mongoose");
=======
>>>>>>> 244ab5dbe1fec89b047e7b140bcf779401c54819
const {
  createComment,
  deleteComment,
  getComments,
} = require("../controller/comment.controller");
<<<<<<< HEAD
=======
const { roleMiddleware } = require("../middlewares/roleMiddleware");
>>>>>>> 244ab5dbe1fec89b047e7b140bcf779401c54819

const router = express.Router();

router
<<<<<<< HEAD
  .get("/comments", getComments)
  .post("/create", createComment)
  .delete("/comment/:id", deleteComment);
=======
  .get("/comments", roleMiddleware, getComments)
  .post("/create", createComment)
  .delete("/comment/:id", roleMiddleware, deleteComment);
>>>>>>> 244ab5dbe1fec89b047e7b140bcf779401c54819

module.exports.commentRoutes = router;
