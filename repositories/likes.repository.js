const { Like, post } = require("../models");

class LikeRepository {
    checkPost = async (postId) => {
        const checkPostData = await Like.findOne({
            where: { postId },
        });
        if (!checkPostData) {
            return false;
        } else {
            return true;
        }
    };
    postLikeUpDown = async (postId, likeNum) => {
        try {
            const test = await post.findOne({
                where: { postId },
            });

            await post.update(
                {
                    like: test.like + likeNum,
                },
                {
                    where: { postId },
                }
            );
        } catch (err) {
            return;
        }
    };
    checkExistLikeAndDelete = async (postId, userId) => {
        const checkExistLikeAndDeleteData = await Like.findOne({
            where: { postId: Number(postId), userId },
        });

        if (!checkExistLikeAndDeleteData === true) {
            return false;
        } else {
            this.postLikeUpDown(postId, -1);
            await Like.destroy({
                where: { postId: Number(postId), userId },
            });
            return true;
        }
    };

    createPostLike = async (postId, userId) => {
        await Like.create({
            postId,
            userId,
        });
        this.postLikeUpDown(postId, +1);
        return;
    };

    getMyLike = async (userId) => {
        let likes = [];
        let posts = [];

        // 내가 좋아요 한 값 찾기
        const myLikeData = await Like.findAll({ where: { userId } });
        // 내가 종아요 한 게시물 좋아요 횟수 찾기
        for (let i = 0; i < myLikeData.length; i++) {
            const likeArray = await Like.findAll({
                where: { postId: myLikeData[i].postId },
            });
            likes.push(likeArray.length);
        }

        // 게시글 정보 가져오기
        for (let i = 0; i < myLikeData.length; i++) {
            const postInfo = await post.findOne({
                where: { postId: myLikeData[i].postId },
            });
            posts.push(postInfo);
        }

        return { likes, posts };
    };
}

module.exports = LikeRepository;
