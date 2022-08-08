const UsersController = require("../controllers/users.controller");
const { User } = require("../models");

class UserRepository {
    createUser = async (id, pw, confirmpw, nickname) => {
        const createUserData = await User.create({
            id,
            pw,
            confirmpw,
            nickname,
        });

        return createUserData;
    };
    loginUser = async (id, pw) => {
        const loginUserData = await User.findAll({ where: { id, pw } });

        if (!loginUserDataser) {
            res.status(400).send({
                errorMessage: "닉네임 또는 패스워드가 잘못됐습니다.",
            });
            return loginUserData;
        }
    };

    deleteUser = async (userId) => {
        const deleteUserData = await User.destroy({ wehre: { userId } });
        console.log("repo", userId);
        return deleteUserData;
    };
}

module.exports = UserRepository;
