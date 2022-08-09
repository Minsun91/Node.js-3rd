const express = require("express");
const router = express.Router();

const postRouter = require("./posts.routes");
const commentRouter = require("./comments.routes");
const userRouter = require("./users.routes");
const likeRouter = require("./likes.routes");




router.use("/posts/", postRouter);
router.use("/comments/", commentRouter);
router.use("/", userRouter);
router.use("/likes/", likeRouter);


module.exports = router;
