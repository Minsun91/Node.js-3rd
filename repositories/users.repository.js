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
        const user = await User.findOne({ where: { id, pw } });

        if (!user) {
            res.status(400).send({
                errorMessage: "닉네임 또는 패스워드가 잘못됐습니다.",
            });
            return;
        }
    };
}

module.exports = UserRepository;
