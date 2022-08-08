const auth = require("../middlewares/auth-middleware");
const UserRepository = require("../repositories/users.repository");
const jwt = require("jsonwebtoken");

class UserService {
    userRepository = new UserRepository();

    //회원가입
    /**
     *
     * @param {*} id
     * @param {*} pw
     * @param {*} nickname
     * @returns
     */
    createUser = async (id, pw, nickname) => {
        await this.userRepository.createUser(id, pw, nickname);
        return {
            Message: "회원가입을 축하드립니다.",
        };
    };

    //로그인
    loginUser = async (id, pw) => {
        const loginUserData = await this.userRepository.loginUser(id, pw);
        return {
            Message: "로그인 되었습니다.",
        };
    };

    //로그아웃
    logoutUser = async (userId) => {};

    //유저 수정
    updateUser = async (nickname, pw) => {
        const updateUserData = await this.userRepository.updateUser(
            nickname,
            pw
        );
        return { Message: "내용 수정 되었습니다." };
    };

    //유저삭제
    deleteUser = async (userId) => {
        const deleteUserData = await this.userRepository.deleteUser(userId);
    };
    return;
}

module.exports = UserService;
