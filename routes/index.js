const express = require("express");
const router = express.Router();

// const postRouter = require("./posts.routes");
// const commentRouter = require("./comments.routes");
const userRouter = require("./users.routes");
// const likeRouter = require("./likes.routes");

<<<<<<< HEAD
// router.use("/posts/", postRouter);
// router.use("/comments/", commentRouter);
router.use("/users", userRouter);
=======
router.use("/posts/", postRouter);
router.use("/comments/", commentRouter);
router.use("/", userRouter);
>>>>>>> 42c1444ba64d6aa0390aeac54da6202e99418487
// router.use("/likes/", likeRouter);

module.exports = router;
