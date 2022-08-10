/* const express = require("express");
const router = express.Router();
const socketIo = require("socket.io");
const path = require("path");

const authMiddleware = require("../middlewares/auth-middleware");

const Http = require("../app");
const io = socketIo(http, { path: "/socket.io" });

router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "index.html"));
});

io.on("connection", (socket) => {
    // 에러 났을 때
    socket.on("error", (error) => {
        console.error(error);
    });

    // 메시지 송신
    function post(data, name) {
        io.emit("news", `${name}: ${data}`);
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

module.exports = router;
 */
