const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();


// 게시물 조회
router.get("/", postsController.getAllPosts /* ex) .getPosts */);

// 게시물 상세보기
router.get("/:postId", postsController.getOnePost);

// 게시물 작성
router.post("/", authMiddleware, postsController.createPost);

// 게시물 수정

router.patch("/:postId", authMiddleware,postsController.updatePost);

// 게시물 삭제
router.delete("/:postId", authMiddleware,postsController.deletePost);


module.exports = router;
