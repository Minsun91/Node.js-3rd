const express = require("express");
const auth = require("../middlewares/auth-middleware");
<<<<<<< HEAD
=======

>>>>>>> 42c1444ba64d6aa0390aeac54da6202e99418487
const router = express.Router();

const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

// 회원가입
router.post("/signup", usersController.createUser);

// 로그인
router.post("/signin", usersController.signinUser);

<<<<<<< HEAD
// // 로그아웃
=======
// 로그아웃
>>>>>>> 42c1444ba64d6aa0390aeac54da6202e99418487
router.get("/logout", usersController.logoutUser);

// // 유저 수정
router.patch("/edit/:userId", usersController.updateUser);

// // 회원 탈퇴
router.delete("/delete/:userId", usersController.deleteUser);

module.exports = router;
