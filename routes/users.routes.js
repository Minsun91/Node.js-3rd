const express = require("express");
const auth = require("../middlewares/auth-middleware");

const router = express.Router();

const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

// 회원가입
router.post("/signup", usersController.createUser);

// 로그인
router.post("/signin", usersController.signinUser);

router.get("/logout", usersController.logoutUser);

// // 유저 수정
router.patch("/edit/:userId", usersController.updateUser);

// // 회원 탈퇴
router.delete("/delete/:userId", usersController.deleteUser);

module.exports = router;
