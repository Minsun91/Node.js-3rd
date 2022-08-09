const UserService = require("../services/users.service");

class UsersController {
    userService = new UserService();

    //회원가입
    createUser = async (req, res, next) => {
        const { id, pw, confirmpw, nickname } = req.body;
        const { cookie } = req.headers;

        if (cookie) {
            res.status(400).send({
                errorMessage: "이미 로그인 되어 있습니다. ",
            });
            return;
        }
        //비밀번호와 비밀번호 확인란 일치하지않을경우 메세지출력
        if (pw !== confirmpw) {
            res.status(400).send({
                errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
            });
            return;
        }
        //회원가입 부합테스트
        const nicknameRegExp = /^[a-zA-z0-9]{3,}$/; // 닉네임이 3자리이상 영문대소문자,숫자로 입력하게.
        if (!nicknameRegExp.test(id) || pw.search(id) > -1) {
            res.status(400).send({
                errorMessage:
                    "닉네임: 3자리 이상 영문 대소문자와 숫자로 입력하세요 / 패스워드:  닉네임과 같은 단어 포함 금지",
            });
            return;
        }

        // 서비스 계층에 구현된 creatUser 로직을 실행합니다.
        await this.userService.createUser(id, pw, nickname);

        res.status(201).json({ Message: "회원가입을 축하드립니다." });
    };

    signinUser = async (req, res, next) => {
        const { id, pw } = req.body;
        const { cookie } = req.headers;

        if (cookie) {
            res.status(400).send({
                errorMessage: "이미 로그인 되어 있습니다. ",
            });
            return;
        }
        await this.userService.loginUser(res, id, pw);

        res.status(201).json({ Message: "로그인이 완료됐습니다." });
    };

    logoutUser = async (req, res) => {
        await this.userService.logoutUser(res);
        res.status(201).json({ Message: "로그아웃을 했습니다." });
    };

    //delete 인자값을 넘겨줌
    deleteUser = async (req, res, next) => {
        // const { cookie } = req.headers;
        // const { userId } = res.locals;
        const { deletemessage } = req.body;

        // console.log("탈퇴", userId);

        if (deletemessage !== "회원 탈퇴하겠습니다.") {
            let userId = "4";
            res.status(400).send({
                Message: "메세지를 정확히 입력해주세요. ",
            });
        } else {
            const deleteUserData = await this.userService.deleteUser(
                4
                // {userId,}
            );
            res.status(201).send({
                // Message: `${userId}번 회원 탈퇴되었습니다.`,
                Message: "회원 탈퇴되었습니다.",
            });
        }
    };
}

module.exports = UsersController;
