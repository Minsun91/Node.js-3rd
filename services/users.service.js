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

    loginUser = async (res, id, pw) => {
        // const { id, pw } = req.body;
        const signinUserData = await this.userRepository.signinUser(id, pw);
        console.log("로그인 id 확인", id, pw);

        const token = jwt.sign(
            {
                userId: signinUserData[0]["userId"],
                nickname: signinUserData[0]["nickname"],
            },
            "MS-secret-key"
        );
        console.log("서비스", userId, nickname);
        res.cookie("token", token, {
            maxAge: 1000 * 60 * 60,
        });
        return signinUserData;
    };

    logoutUser = async (res) => {
        await res.clearCookie("token");
        return;
    };

    //유저 수정
    updateUser = async (userId, nickname, pw) => {
        const updateUserData = await this.userRepository.updateUser(
            userId,
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
