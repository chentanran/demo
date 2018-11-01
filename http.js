const http = require("http");

const httpServer = http.createServer();

httpServer.on('request', (req, res) => {
    const url = req.url;

    res.writeHeader(200, {
        "Content-Type" : "Text/plain;charset=utf-8"
    })

    if(url == '/'){
        res.end(String(req));
    }

    res.end("123");
})

httpServer.listen("3000","127.0.0.1", () => {
    console.log("开启成功, httpServer:http://127.0.0.1:3000")
})









// const http = require("http");

// const httpServer = http.createServer();

// httpServer.on("request", (req,res) => {

//     const url = req.url;
    
//     res.writeHeader(200, {
//         'Content-Type' : 'text/plain;charset=utf-8'
//     })

//     if(url === '/' || url === '/事件监听.html'){
//         res.end(url);
//     }else if(url === '模板字符串.html'){
//         res.end("模板字符串")
//     }

//     res.end("这是一个服务器");
// })

// httpServer.listen("3000","127.0.0.1", () => {
//     console.log("开启服务器成功 , 地址是 http://127.0.0.1:3000")
// })