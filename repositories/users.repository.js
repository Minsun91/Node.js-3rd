const { Users } = require("../models");

class UserRepository {
    createUser = async (nickname, pw, id) => {
        // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 호출합니다.
        const createPostData = await Users.create({
            nickname,
            pw,
            id,
        });

        return createUserData;
    };
}

module.exports = UserRepository;
