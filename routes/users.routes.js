const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

// 회원가입
router.post("/signup", usersController.createUser);

// 로그인
router.post("/signin", usersController.signinUser);

// 로그아웃
router.get("/logout", usersController.logoutUser);

// 유저 수정
router.patch("/user/edit", usersController.updateUser);

// 회원 탈퇴
router.delete("/user/delete", usersController.deleteUser);

module.exports = router;
