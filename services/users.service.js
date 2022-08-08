const auth = require("../middlewares/auth-middleware");
const UserRepository = require("../repositories/users.repository");

class UserService {
  userRepository = new UserRepository();
  //회원가입
  createUser = async (id, pw, confirmpw, nickname) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    await this.userRepository.createUser(id, pw, confirmpw, nickname);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      Message: "회원가입을 축하드립니다.",
    };
  };

  loginUser = async (id, pw) => {
    const loginUserData = await this.UserRepository.loginUser(id, pw);
  };
}

module.exports = UserService;
