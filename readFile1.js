const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer();

server.on("request", (req, res) => {
    let url = req.url;

        if(url === '/')  url = "/http/add.html";
        fs.readFile(path.join(__dirname,url), (err, buf) => {
            if(err) return console.log(err.message);
            res.end(buf);
        })
})

server.listen(2999, () => {
    console.log("开启成功, http://127.0.0.1:2999")
})