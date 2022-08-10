const express = require("express");
const { createServer } = require("http");

const app = express();
const http = createServer(app);

const port = 3000;

const router = require("./routes");

app.use(express.json());
app.use("/static/index.css", express.static(__dirname + "/static/index.css"));
app.use(
    "/static/config/reset.css",
    express.static(__dirname + "/static/config/reset.css")
);

app.use("/", router);

http.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!");
});

module.exports = http;
