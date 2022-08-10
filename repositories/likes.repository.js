const { like } = require("../models");
const { post } = require("../models");

class LikeRepository {
    checkPost = async (postId) => {
        const checkPostData = await like.findOne({
            where: { postId },
        });
        if (!checkPostData) {
            return false;
        } else {
            return true;
        }
    };
    postLikeUpDown= async(postId,likeNum) => {
        try{const test =await post.findOne({
            where: {postId}
        })
        
        
        await post.update(
        {
            like:test.like + likeNum

        },{
            where : {postId}
        }
        )}catch(err){
            next(err)
        }
    }
    checkExistLikeAndDelete = async (postId, userId) => {
        
        
        const checkExistLikeAndDeleteData=await like.findOne({
                where: {postId:Number(postId), userId },
            });
            
            if(!checkExistLikeAndDeleteData === true){
                return false;
            }else {
                
                this.postLikeUpDown(postId,-1) 
                await like.destroy({
                where: { postId:Number(postId), userId },
            })
            return true;}
        
    };

    createPostLike = async (postId, userId) => {
        await like.create({
            postId,
            userId,
        });
        this.postLikeUpDown(postId,+1)
        return;
    };
}

module.exports = LikeRepository;
