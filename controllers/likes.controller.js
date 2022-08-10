const LikesService = require("../services/likes.service");

class LikesController {
    likeService = new LikesService();

    postLike = async (req, res, next) => {
        const { postId } = req.params;
        const { userId } = res.locals;
        const postLikeData = this.likeService(postId, userId);
        res.status(postLikeData.status).json(postLikeData.msg);
    };

    getMyLike = async (req, res) => {
        const { userId } = res.locals;
        const getMylike = await this.likeService.getMyLike(userId);

        res.status(200).json(getMylike);
    };
}

module.exports = LikesController;
