const express = require("express");
const app = express();
const port = 3000;

const socketIo = require("socket.io");
const Http = require("http");
const http = Http.Server(app);
const io = socketIo(http, { path: "/socket.io" });
const jwt = require("jsonwebtoken");

const router = require("./routes");

const authMiddleware = require("./middlewares/auth-middleware");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/static/index.css", express.static(__dirname + "/static/index.css"));
app.use(
    "/static/config/reset.css",
    express.static(__dirname + "/static/config/reset.css")
);

app.use("/", router);

app.get("/socket", authMiddleware, (req, res) => {
    const { userId } = res.locals;
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    let nickname = "";

    // 에러 났을 때
    socket.on("error", (error) => {
        console.error(error);
    });

    socket.on("message", (cookie) => {
        const token = cookie;
        const [tokenType, tokenValue] = (token || "").split("=");
        const tokenvoll = jwt.verify(tokenValue, "MS-secret-key");
        nickname = tokenvoll.nickname;
    });

    // 메시지 송신
    function post(data) {
        io.emit("news", `${nickname}: ${data}`);
    }

    // 메시지 수신
    socket.on("reply", (data) => {
        post(data, socket.id.substring(0, 3));
    });

    // 접속해제
    socket.on("disconnect", () => {
        console.log("클라이언트 접속 해제", socket.id);
        clearInterval(socket.interval);
    });
});

http.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!");
});
