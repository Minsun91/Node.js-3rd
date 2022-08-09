const CommentRepository = require("../repositories/comments.repository");
const commentRepository = new CommentRepository();

describe("comment", () => {
  test("Comment 조회", () => {
    expect(commentRepository.findAllComment(1)).toEqual(true);
  });
});
