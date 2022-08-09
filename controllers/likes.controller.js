const LikesService = require("../services/likes.service");

class LikesController {
    likeService = new LikesService();

    postLike = async (req, res, next) => {
        const { postId } = req.params;
        const { userId } = req.locals;
        const postLikeData = this.likeService(postId, userId);
        res.status(postLikeData.status).json(postLikeData.msg);
    };

    // 함수 작성
}

module.exports = LikesController;
