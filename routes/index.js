const express = require("express");
const router = express.Router();

const postRouter = require("./posts.routes");
const commentRouter = require("./comments.routes");
const userRouter = require("./users.routes");
const likeRouter = require("./likes.routes");
// const socketRouter = require("./socket.routes");

router.use("/posts/", postRouter);
router.use("/comments/", commentRouter);
router.use("/", userRouter);
router.use("/likes/", likeRouter);
// router.use("/socket", socketRouter);

module.exports = router;
