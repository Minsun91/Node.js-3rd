const UserRepository = require("../repositories/users.repository");

class UserService {
    userRepository = new UserRepository();

    findAllUser = async () => {
        const allUser = await this.userRepository.findAllUser();

        return allUser.map((user) => {
            return {
                userId: user.userId,
                nickname: user.nickname,
                pw: user.pw,
                confirmpw: user.confirmpw,
                // createdAt: user.createdAt,
                // updatedAt: user.updatedAt,
            };
        });
    };

    createUser = async (id, pw, confirmPw, nickname) => {
        const createUserData = await this.userRepository.createUser(
            id,
            pw,
            confirmPw,
            nickname
        );

        return {
            id: createUserData.id,
            nickname: createUserData.nickname,
            pw: createUserData.pw,
            confirmPw: createUserData.confirmPw,
            createdAt: createUserData.createdAt,
        };
    };

    updateUser = async (content) => {
        const updatePostData = await this.postRepository.updatePost(content);

        return {
            content: updatePostData.content,
            createdAt: updatePostData.createdAt,
            updatedAt: updatePostData.updatedAt,
        };
    };
}

module.exports = UserService;
