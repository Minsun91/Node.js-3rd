const CommentRepository = require("../repositories/comments.repository");
const commentRepository = new CommentRepository();

jest.mock("../models");
const { Comment } = require("../models");

describe("CommentRepository", () => {
    const postId = 1;

    test("CommentRepository 댓글 가지고 오기", async () => {
        Comment.findAll.mockReturnValue(
            Promise.resolve({
                postId: 1,
            })
        );

        const result = await commentRepository.findAllComment({
            where: { postId },
        });
        expect(result.postId).toEqual(1);
    });
});
