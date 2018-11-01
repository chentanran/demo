const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer();

server.on("request", (req,res) => {
    const url = req.url;
    if(url === "/http/add.html"){
        fs.readFile(path.join(__dirname,"./http/add.html"),(err,buf) => {
            if(err) return console.log(err.message);
            res.end(buf);
        })
    }else if(url === "/http/css/1.css"){
        fs.readFile(path.join(__dirname,"/http/css/1.css"),(err,buf) => {
            if(err) return console.log(err.message);
            res.end(buf);
        })
    }
    else if(url === "/http/js/1.js"){
        fs.readFile(path.join(__dirname,"http/js/1.js"),(err,buf) => {
            if(err) return console.log(err.message);
            res.end(buf);
        })
    }

    // res.end("错误了");
})

server.listen(3000, () => {
    console.log("启动成功, http://127.0.0.1:3000/http/add.html")
})