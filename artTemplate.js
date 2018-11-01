const http = require("http");
const path = require("path");
const template = require("art-template");


const server = http.createServer();

server.on("request", (req,res) => {
    let url = req.url;

    if(url === '/') url = "/http/end.html";

    var data = {list:['123','456']};

    var html = template(path.join(__dirname,url),data);

    res.end(html);
})

server.listen(3000, ()=>{
    console.log("启动成功, http://127.0.0.1:3000")
})