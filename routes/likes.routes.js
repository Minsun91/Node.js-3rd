const express = require("express");
const router = express.Router();

const LikesController = require("../controllers/likes.controller");
const likesController = new LikesController();

// 게시물 좋아요
// router.patch("/:postId/like", likesController /* .함수이름 */);

// 자기가 좋아요 한 게시물 조회
router.get("/my", likesController);

module.exports = router;
