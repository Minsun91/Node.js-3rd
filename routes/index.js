const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const postRouter = require("./posts.routes");
const commentRouter = require("./comments.routes");
const userRouter = require("./users.routes");
// const likeRouter = require("./likes.routes");

router.use("/posts/", postRouter);
router.use("/comments/", commentRouter);
router.use("/", userRouter);
// router.use("/likes/", likeRouter);
=======

const postRouter = require("./posts.routes");
const commentRouter = require("./comments.routes");
const userRouter = require("./users.routes");
const likeRouter = require("./likes.routes");


router.use("/users", userRouter);
router.use("/posts/", postRouter);
router.use("/comments/", commentRouter);
router.use("/", userRouter);

>>>>>>> 2d5646aadbf63408bd378b8f45166f769cbb4f2f

module.exports = router;
