const CommentRepository = require("../repositories/comments.repository");
const CommentVerify = require("../verify/commentVerify");

class CommentService {
  commentRepository = new CommentRepository();
  commentVerify = new CommentVerify();

  findAllComment = async (postId) => {
    const allComment = await this.commentRepository.findAllComment(postId);

    const comments = allComment.map((comment) => {
      return {
        commentId: comment.commentId,
        nickname: comment.nickname,
        content: comment.content,
        createdAt: comment.createdAt,
      };
    });

    return [comments.reverse()];
  };

  createComment = async (postId, userId, content) => {
    const verifyPostId = await this.commentVerify.verifyPostId(postId);

    const verifyContent = await this.commentVerify.verifyContent(content);

    if (!verifyPostId) {
      return [{ status: 400 }, { msg: "해당 게시글이 없습니다." }];
    }
    if (!verifyContent) {
      return [{ status: 400 }, { msg: "댓글을 입력해주세요" }];
    }

    await this.commentRepository.createComment(postId, userId, content);

    return [{ status: 201 }, { msg: "댓글이 작성되었습니다." }];
  };

  updateComment = async (commentId, postId, userId, content) => {
    const verifyPostId = await this.commentVerify.verifyPostId(postId);

    const verifyCommentId = await this.commentVerify.verifyCommentId(commentId);

    const verifyConfrimUserNickname =
      await this.commentVerify.verifyConfrimUserNickname(userId, commentId);

    const verifyContent = await this.commentVerify.verifyContent(content);

    if (!verifyPostId) {
      return [{ status: 400 }, { msg: "해당 게시글이 없습니다." }];
    }

    if (!verifyCommentId) {
      return [{ status: 400 }, { msg: "없는 댓글입니다." }];
    }

    if (!verifyConfrimUserNickname) {
      return [{ status: 400 }, { msg: "본인 댓글이 아닙니다." }];
    }

    if (!verifyContent) {
      return [{ status: 400 }, { msg: "댓글을 입력해주세요" }];
    }

    await this.commentRepository.updateComment(
      commentId,
      postId,
      userId,
      content
    );

    return [{ status: 200 }, { msg: "댓글 수정 완료" }];
  };

  deleteComment = async (commentId, postId, userId, pw) => {
    const verifyPostId = await this.commentVerify.verifyPostId(postId);

    const verifyCommentId = await this.commentVerify.verifyCommentId(commentId);

    const verifyConfirmPw = await this.commentVerify.verifyConfirmPw(
      userId,
      pw
    );

    if (!verifyPostId) {
      return [{ status: 400 }, { msg: "해당 게시글이 없습니다." }];
    }

    if (!verifyCommentId) {
      return [{ status: 400 }, { msg: "없는 댓글입니다." }];
    }

    if (!verifyConfirmPw) {
      return [{ status: 400 }, { msg: "비밀번호를 확인해주세요" }];
    }

    await this.commentRepository.deleteComment(commentId);

    return [{ status: 200 }, { msg: "댓글이 삭제 되었습니다." }];
  };
}
module.exports = CommentService;
