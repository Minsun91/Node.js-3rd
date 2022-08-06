const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

// 회원가입
router.post("/signup", usersController /* .함수이름 */);

// 로그인
router.post("/signin", usersController);

// 로그아웃
router.get("/logout", usersController);

// 유저 수정
router.patch("/user/edit", usersController);

// 회원 탈퇴
router.delete("/user/delete", usersController);

module.exports = router;
