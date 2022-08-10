const LikeRepository = require("../repositories/likes.repository");

class LikesService {
    likeRepository = new LikeRepository();
    

    postLike = async (postId, userId) => {
        if (!this.likeRepository.checkPost(postId)) {
            return {
                status: 404,
                msg: "해당되는 포스트가 없습니다.",
            };
        }
        const exist = await this.likeRepository.checkExistLikeAndDelete(postId,userId)
        if (exist ) {
            return {
                status: 200,
                msg: `${postId}번 게시물 좋아요 삭제!`,
            };
        }
        await this.likeRepository.createPostLike(postId, userId);
        return {
            status: 200,
            msg: `${postId}번 게시물 좋아요!`,
        };
    };
    getMyLike = async (userId) => {
        const myLike = await this.likeRepository.getMyLike(userId);

        // 내가 좋아요 한 값 찾기, 내가 종아요 한 게시물 좋아요 횟수 찾기
        const { likes, posts } = myLike;

        const result = posts.map((curV, curI) => {
            return {
                postId: curV.postId,
                title: curV.title,
                content: curV.content,
                createdAt: curV.createdAt,
                like: likes[curI],
            };
        });

        if (result.length === 0) {
            return { msg: "아직 좋아요 한 게시물이 없습니다." };
        } else {
            return result.sort((a, b) => {
                return b.like - a.like;
            });
        }
    };
}

module.exports = LikesService;
