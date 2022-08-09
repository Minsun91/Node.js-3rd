const UsersController = require("../controllers/users.controller");
const { User, post, Comment, like } = require("../models");

class UserRepository {
    createUser = async (id, pw, nickname) => {
        const createUserData = await User.create({ id, pw, nickname });
        return createUserData;
    };

    signinUser = async (id, pw) => {
        const loginUserData = await User.findAll({ where: { id, pw } });

        if (!loginUserData) {
            res.status(400).send({
                errorMessage: "닉네임 또는 패스워드가 잘못됐습니다.",
            });
        }
        return loginUserData;
    };

    updateUser = async (userId, new_nickname, pw, nickname) => {
        const updateUserData = await User.update(
            { nickname: new_nickname },
            { where: { userId } }
        );

        const updatePostData = await post.update(
            { nickname: new_nickname },
            { where: { userId } }
        );
        const updateCommentData = await Comment.update(
            { nickname: new_nickname },
            { where: { nickname } }
        );

        // const updateLikeData = await like.update(
        //     { new_nickname },
        //     { where: { userId } }
        // );
        return updateUserData;
    };

    deleteUser = async (userId, nickname) => {
        const deleteUserData = await User.destroy({ where: { userId } });
        const deleteCommentData = await Comment.destroy({
            where: { nickname },
        });
        const deletePostData = await post.destroy({ where: { userId } });
        // const deleteLikeData = await like.destroy({ where: { userId } });

        return deleteUserData;
    };
}

module.exports = UserRepository;
