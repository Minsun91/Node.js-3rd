const express = require("express");
const auth = require("../middlewares/auth-middleware");
const router = express.Router();

const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

// 회원가입
router.post("/signup", usersController.createUser);

// 로그인
router.post("/signin", usersController.signinUser);

// 로그아웃
router.get("/logout", usersController.logoutUser);

<<<<<<< HEAD
// // 유저 수정
//router.patch("/edit/:userId", usersController.updateUser);
=======
// 유저 수정
router.patch("/edit/:userId", auth, usersController.updateUser);
>>>>>>> e9f0f01c6961dd3b8b434803bd7c25337b5c262e


// 회원 탈퇴
router.delete("/delete", auth, usersController.deleteUser);

module.exports = router;
