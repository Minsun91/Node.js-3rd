const express = require("express");
const auth = require("../middlewares/auth-middleware");
const router = express.Router();
const path = require("path");

const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

// 회원가입
router.post("/signup", usersController.createUser);
router.get("/signup", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "signup.html"));
});
// 로그인
router.post("/signin", usersController.signinUser);
router.get("/signin", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "signin.html"));
});

// 로그아웃
router.get("/logout", usersController.logoutUser);

// 유저 수정
router.patch("/edit", auth, usersController.updateUser);

// 회원 탈퇴
router.delete("/delete", auth, usersController.deleteUser);

module.exports = router;
