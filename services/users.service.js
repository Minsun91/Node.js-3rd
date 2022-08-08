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
        // const { id, pw } = req.body;

        const loginUserData = await this.UserRepository.loginUser({
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
            const updatePostData = await this.postRepository.updatePost(
                content
            );

            return {
                content: updatePostData.content,
                createdAt: updatePostData.createdAt,
                updatedAt: updatePostData.updatedAt,
            };
        };
        deleteUser = async () => {
            const deleteUserData = await this.UserRepository.deleteUser();
        };
    };
}

module.exports = UsersService;
