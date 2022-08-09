const auth = require("../middlewares/auth-middleware");
const UserRepository = require("../repositories/users.repository");
const jwt = require("jsonwebtoken");

class UserService {
  userRepository = new UserRepository();
  //회원가입
  /**
   *
   * @param {*} id
   * @param {*} pw
   * @param {*} nickname
   * @returns
   */
  createUser = async (id, pw, nickname) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    await this.userRepository.createUser(id, pw, nickname);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      Message: "회원가입을 축하드립니다.",

    }}
  

  loginUser = async (res ,id, pw) => {
    // const { id, pw } = req.body;
    console.log(id, pw);
    const signinUserData = await this.userRepository.signinUser(id, pw);
    console.log("로그인 id 확인", id, pw);

    const token = jwt.sign(
      {
        userId: signinUserData.userId,
        nickname: signinUserData.nickname,
      },
      "MS-secret-key"
    );
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60, // expires: 300000, 300000밀리초 → 300초
    });
    return;
  };

  logoutUser = async (res) => {
    await res.clearCookie("token");
    return;
  };


    //유저 수정
    updateUser = async (userId, nickname, pw) => {
        const updateUserData = await this.userRepository.updateUser(
            4, //userId
            nickname,
            pw
        );
        return { Message: "내용 수정 되었습니다." };
    };

    //유저삭제
    deleteUser = async (userId) => {
        const deleteUserData = await this.userRepository.deleteUser(userId);
    };
    return;



  }
module.exports = UserService;
