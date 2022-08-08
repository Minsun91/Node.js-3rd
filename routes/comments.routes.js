const express = require("express");
const router = express.Router();

const CommentsController = require("../controllers/comments.controller");
const commentsController = new CommentsController();

router.get("/:postId", commentsController.getComments);
router.post("/:postId", commentsController.createComment);
router.patch("/:postId/:commentId", commentsController.updateComment);
router.delete("/:postId/:commentId", commentsController.deleteComment);

module.exports = router;
