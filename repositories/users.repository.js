const UsersController = require("../controllers/users.controller");
const { User } = require("../models");

class UserRepository {
    createUser = async (id, pw, nickname) => {
        const createUserData = await User.create({ id, pw, nickname });
        return createUserData;
    };

    loginUser = async (id, pw) => {
        const loginUserData = await User.findAll({ where: { id, pw } });

        if (!loginUserData) {
            res.status(400).send({
                errorMessage: "닉네임 또는 패스워드가 잘못됐습니다.",
            });
            return loginUserData;
        }
    };

    updateUser = async (nickname, pw) => {
        const updateUserData = await User.update(
            { nickname, pw },
            { where: { User } }
        );
        // console.log(nickname, pw);

        return updateUserData;
    };

    deleteUser = async (userId) => {
        const deleteUserData = await User.destroy({ where: { userId } });
        console.log("repo", userId);
        return deleteUserData;
    };
}

module.exports = UserRepository;
