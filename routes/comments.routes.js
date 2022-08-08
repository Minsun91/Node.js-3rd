const express = require("express");
const router = express.Router();

const CommentsController = require("../controllers/comments.controller");
const commentsController = new CommentsController();

router.get("/:postId", commentsController /* ex) .getComments */);
router.post("/:postId", commentsController);
router.patch("/:postId/:commentId", commentsController);
router.delete("/:postId/:commentId", commentsController);

module.exports = router;
