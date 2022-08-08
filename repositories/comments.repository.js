// const { Comment } = require("../models");
// const { User } = require("../models");
// const { Post } = require("../models");

class CommentRepository {
  findAllComment = async (postId) => {
    const comments = await Comment.findAll({ where: { postId } });

    return comments;
  };

  createComment = async (postId, userId, content) => {
    const userInfo = await User.findOne({
      where: { userId },
    });

    await Comment.create({
      nickname: userInfo.nickname,
      postId,
      content,
    });

    return;
  };

  updateComment = async (commentId, postId, userId, content) => {
    await Comment.update({ content }, { where: { commentId } });

    return;
  };

  deleteComment = async (commentId) => {
    await Comment.destroy({ where: { commentId } });

    return;
  };
}

module.exports = CommentRepository;
