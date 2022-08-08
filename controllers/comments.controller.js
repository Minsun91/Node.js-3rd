const CommentService = require("../services/comments.service");

class CommentsController {
  commentService = new CommentService();

  getComments = async (req, res) => {
    const { postId } = req.params;

    const comments = await this.commentService.findAllComment(postId);

    req.status(200).json({ comments });
  };

  createComment = async (req, res) => {
    const { postId } = req.params;
    const { userId } = res.locals;
    const { content } = req.body;

    const comment = await this.commentService.createComment(
      postId,
      userId,
      content
    );

    if (comment[0]["status"] === 400) {
      return res.status(400).json({ msg: comment[1]["msg"] });
    }

    if (comment[0]["status"] === 201) {
      return res.status(201).json({ msg: comment[1]["msg"] });
    }
  };

  updateComment = async (req, res) => {
    const { commentId, postId } = req.params;
    const { content } = req.body;
    const { userId } = res.locals;

    const comment = await this.commentService.updateComment(
      commentId,
      postId,
      userId,
      content
    );

    if (comment[0]["status"] === 400) {
      return res.status(400).json({ msg: comment[1]["msg"] });
    }

    if (comment[0]["status"] === 200) {
      return res.status(200).json({ msg: comment[1]["msg"] });
    }
  };

  deleteComment = async (req, res) => {
    const { commentId, postId } = req.params;
    const { userId } = res.locals;
    const { pw } = req.body;

    const comment = await this.commentService.deleteComment(
      commentId,
      postId,
      userId,
      pw
    );

    if (comment[0]["status"] === 400) {
      return res.status(400).json({ msg: comment[1]["msg"] });
    }

    if (comment[0]["status"] === 200) {
      return res.status(200).json({ msg: comment[1]["msg"] });
    }
  };
}

module.exports = CommentsController;
