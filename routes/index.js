const express = require("express");
const router = express.Router();

const commentRouter = require("./comments.routes");
const userRouter = require("./users.routes");
const postRouter = require("./posts.routes");
const commentRouter = require("./comments.routes");


router.use("/users", userRouter);
router.use("/posts/", postRouter);
router.use("/comments/", commentRouter);
router.use("/", userRouter);


module.exports = router;
