const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

const CommentsController = require("../controllers/comments.controller");
const commentsController = new CommentsController();

router.get("/:postId", commentsController.getComments);
router.post("/:postId", authMiddleware, commentsController.createComment);
router.patch(
  "/:postId/:commentId",
  authMiddleware,
  commentsController.updateComment
);
router.delete(
  "/:postId/:commentId",
  authMiddleware,
  commentsController.deleteComment
);
module.exports = router;
