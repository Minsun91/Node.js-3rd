const {like} = require("../models")

class LikeRepository {
    
    checkPost= async(postId) =>{
        const checkPostData = await like.findOne({
            where: {postId}
        });
        if(!checkPostData){ return false}
        else{ return true};

    }

    checkExistLikeAndDelete = async(postId,userId) => {
        try{await like.destroy({
            where : {postId,userId}
        });
        return true;
        }catch(err){
            return false;
        }
    }

    createPostLike= async(postId, userId) =>{
        await like.create({
            postId,
            userId
        });
        return;
    }

    
}

module.exports = LikeRepository;
