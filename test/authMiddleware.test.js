const authMiddleware = require("../middlewares/auth-middleware");

jest.mock("jsonwebtoken");

const jwt = require("jsonwebtoken");

describe("isLoggedIn", () => {
    const req = {
        headers: {
            cookie: "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VySWQiOjQsIm5pY2tuYW1lIjoi7IOB7KexIiwiaWF0IjoxNjYwMTg3NDM4fQUfU0a1I1Pas49oOkQ_IszECNBSOmW3L6G3GJ0dygyeM",
        },
    };
    const res = {
        status: jest.fn(() => res),
        send: jest.fn(),
        locals: { userId: "" },
        locals: { nickname: "" },
    };
    const next = jest.fn();

    test("미들웨어 테스트 로그인 되어있으면 next를 호출 해야 함", () => {
        jwt.verify.mockReturnValue({ userId: 1, nickname: "hi" });
        authMiddleware(req, res, next);

        expect(next).toBeCalledTimes(1);
    });
});
