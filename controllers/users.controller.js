const usersService = require("../services/users.service");

class UsersService {
    userservice = new UserService();

    //signup
    createUser = async (req, res, next) => {
        const { id, pw, confirmPw, nickname } = req.body;

        // 서비스 계층에 구현된 createPost 로직을 실행합니다.
        const createUserData = await this.UserService.createUser(
            nickname,
            pw,
            confirmPw,
            id
        );

        res.status(201).json({
            data: createUserData,
            message: "회원가입을 축하드립니다.",
        });
        next();
    };

    //signin
    signinUser = async (req, res, next) => {
        const { id, pw } = req.body;
        const signinUserData = await this.UserService.signinUser(id, pw);

        res.status(201).json({
            data: signinUserData,
        });
    };

    //logout, clearcookie
    logoutUser = async (req, res, next) => {
        const users = await this.UserService.logoutUser();
        res.status(200).json({ data: users });
    };

    //edit
    updateUser = async (req, res, next) => {
        const { nickname, pw } = req.body;
        const updateUserData = await this.UserService.updateUser({
            where: { nickname, pw },
        });

        res.status(201).json({ data: updateUserData });
    };

    //delete
    deleteUser = async (req, res, next) => {
        const {} = req.body; //”회원탈퇴하겠습니다” 라고 정확히 적어야 회원탈퇴
        const deleteUserData = await this.UserService.deleteUser({});
        res.status(201).json({ data: updateUserData });
    };
}

module.exports = UsersController;
