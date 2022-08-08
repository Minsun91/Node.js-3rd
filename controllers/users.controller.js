const UsersService = require("../services/users.service");

class UsersController {
    userservice = new UsersService();

    //signup
    createUser = async (req, res, next) => {
        const { id, pw, confirmpw, nickname } = req.body;

        const { cookie } = req.headers;
        console.log(cookie);

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
        if (!nicknameRegExp.test(nickname) || pw.search(nickname) > -1) {
            res.status(400).send({
                errorMessage:
                    "닉네임: 3자리 이상 영문 대소문자와 숫자로 입력하세요 / 패스워드: 닉네임과 같은 단어 포함 금지",
            });
            return;
        }

        const createUserData = await this.userservice.createUser(
            id,
            pw,
            confirmpw,
            nickname
        );
        // console.log("컨트롤러", nickname);

        res.status(201).json({
            message: "회원가입을 축하드립니다.",
        });
    };

    //signin
    loginUser = async (req, res, next) => {
        const { id, pw } = req.body;
        console.log(id);

        const loginUserData = await this.userservice.loginUser(id, pw);
        const token = jwt.sign(
            {
                id: loginUserData.id,
            },
            "MS-secret-key"
        );
        res.cookie("token", token, {
            maxAge: 1000 * 60 * 60,
        });
        res.send({ token });
        res.status(200).send({
            Message: "성공적으로 로그인 되었습니다. ",
            // data: loginUserData,
        });
    };

    //logout, clearcookie
    logoutUser = async (req, res, next) => {
        const users = await this.userservice.logoutUser();
        res.status(200).json({ data: users });
    };
    //edit
    updateUser = async (req, res, next) => {
        const { nickname, pw } = req.body;
        const updateUserData = await this.userservice.updateUser({
            where: { nickname, pw },
        });

        res.status(201).json({ data: updateUserData });
    };

    //delete 인자값을 넘겨줌
    deleteUser = async (req, res, next) => {
        const { cookie } = req.headers;
        const { deletemessage } = req.body;
        const { userId } = res.locals;

        console.log("탈퇴", deletemessage);

        if (deletemessage !== "회원 탈퇴하겠습니다") {
            // res.clearCookie("pw");
            res.status(400).send({
                Message: "메세지를 정확히 입력해주세요. ",
            });
        } else {
            const deleteUserData = await this.userservice.deleteUser({
                userId,
            });
            res.status(201).send({ Message: "회원 탈퇴되었습니다. " });
        }
    };
}

module.exports = UsersController;
