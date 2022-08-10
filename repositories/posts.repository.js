const { Like, post } = require("../models");

class PostRepository {
    findAllPost = async () => {
        // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
        const posts = await post.findAll();
        const like = [];

        for (let i = 0; i < posts.length; i++) {
            const temp = await Like.findAll({
                where: { postId: posts[i].postId },
            });
            like.push(temp.length);
        }

        return { posts, like };
    };

    findOnePost = async (postId) => {
        //postId로 포스트를 찾아 반환해주는 함수

        const detailPost = await post.findOne({
            where: { postId },
        });
        return detailPost;
    };

    createPost = async (nickname, pw, title, content, userId) => {
        // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
        const createPostData = await post.create({
            nickname,
            pw,
            title,
            content,
            like: 0,
            userId,
        });

        return createPostData;
    };

    updatePost = async (postId, title, content) => {
        const updatePostData = await post.update(
            {
                //postId로 게시물을 찾아 수정해주는 기능
                title,
                content,
            },
            {
                where: { postId },
            }
        );

        return updatePostData;
    };

    //포스트 아이디로 포스트를 뒤져 비밀번호가 같으면 true
    //아니면 false
    checkPw = async (postId, pw) => {
        const checkPostPwData = await post.findOne({
            where: { postId },
        });
        if (pw === checkPostPwData.pw) {
            return true;
        } else {
            return false;
        }
    };

    deletePost = async (postId) => {
        await post.destroy({
            where: { postId },
        });
    };
}

module.exports = PostRepository;
