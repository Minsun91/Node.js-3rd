const UserRepository = require("../repositories/users.repository");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/auth-middleware");

class UsersService {
    userRepository = new UserRepository();

    //회원가입
    createUser = async (id, pw, confirmpw, nickname) => {
        const createUserData = await this.userRepository.createUser(
            id,
            pw,
            confirmpw,
            nickname
        );
        // console.log("서비스", nickname);
    };

    //로그인
    loginUser = async (id, pw) => {
        const loginUserData = await this.userRepository.findOne({
            where: { id },
        });
        console.log("로그인 id 확인", id);

        if (!id || pw !== loginUserData.pw) {
            res.status(400).send({
                errorMessage: "닉네임 또는 패스워드가 틀렸습니다.",
            });
            return;
        }

        updateUser = async (content) => {
            const updateUserData = await this.userRepository.updateUser(
                content
            );

            return {};
        };
        deleteUser = async (userId) => {
            const deleteUserData = await this.userRepository.deleteUser(userId);
        };
        return;
    };
}

module.exports = UsersService;
