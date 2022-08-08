const UsersController = require("../controllers/users.controller");
const { User } = require("../models");

class UserRepository {
  createUser = async (nickname, id, pw ) => {          // ORM인 Sequelize에서 Users 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createUserData = await User.create({ id, pw, nickname });

    return createUserData;
  }
}

module.exports = UserRepository;
