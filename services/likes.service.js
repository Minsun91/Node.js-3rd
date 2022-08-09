const LikeRepository = require("../repositories/likes.repository");

class LikesService {
    likeRepository = new LikeRepository();

    postLike = async (postId, userId) =>{
        if(!this.likeRepository.checkPost(postId)){
            return {
                status : 404,
                msg: "해당되는 포스트가 없습니다."
            }
        }
        if(this.likeRepository.checkExistLikeAndDelete){
            return{
                status : 200,
                msg : `${postId}번 게시물 좋아요 삭제!`
            }
        }
        await this.likeRepository.createPostLike(postId,userId);
        return{
            status : 200,
            msg : `${postId}번 게시물 좋아요!`
        }
    }
    
}

module.exports = LikesService;
