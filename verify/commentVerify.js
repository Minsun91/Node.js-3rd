// const { Post } = require("../models");
// const { User } = require("../models");
// const { Comment } = require("../models");

class CommentVerify {
  verifyPostId = async (postId) => {
    const exsistPost = await Posts.findOne({
      where: { postId },
    });
    if (exsistPost) {
      return true;
    } else {
      return false;
    }
  };

  verifyCommentId = async (commentId) => {
    const exsistCommentId = await Comment.findOne({ where: { commentId } });

    if (exsistCommentId) {
      return true;
    } else {
      return false;
    }
  };

  verifyConfrimUserNickname = async (userId, commentId) => {
    const userInfo = await User.findOne({
      where: { userId },
    });

    const commentInfo = await Comment.findOne({ where: { commentId } });

    if (userInfo.nickname === commentInfo.nickname) {
      return true;
    } else {
      return false;
    }
  };

  verifyContent = async (content) => {
    if (content) {
      return true;
    } else {
      return false;
    }
  };

  verifyConfirmPw = async (userId, pw) => {
    const userInfo = await User.findOne({
      where: { userId },
    });

    if (userInfo.pw === pw) {
      return true;
    } else {
      return false;
    }
  };
}

module.exports = CommentVerify;
