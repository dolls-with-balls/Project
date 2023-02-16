const express = require("express");
const {
  createComment,
  deleteComment,
  getComments,
} = require("../controller/comment.controller");

const router = express.Router();

router
  .get("/comments", getComments)
  .post("/create", createComment)
  .delete("/comment/:id", deleteComment);

module.exports.commentRoutes = router;
