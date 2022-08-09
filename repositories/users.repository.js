const UsersController = require("../controllers/users.controller");
const { User } = require("../models");

class UserRepository {
  createUser = async (id, pw, nickname) => {
    // ORM인 Sequelize에서 Users 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createUserData = await User.create({ id, pw, nickname });

    return createUserData;
  };
  signinUser = async (id, pw) => {
    const user = await User.findOne({ where: { id, pw } });

    if (!user) {
      res.status(400).send({
        errorMessage: "닉네임 또는 패스워드가 잘못됐습니다.",
      });
      return;
    }
    return user;
  };
}

module.exports = UserRepository;
