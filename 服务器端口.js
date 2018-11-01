'use strict'

const http = require('http');

var count = 0;

const server = http.createServer((request,response)=>{
    response.write('你是第${count++}个访问用户');

    response.end();
});

server.listen(2080,(error) => {
    if(error) throw error;

    console.log("成功启动web服务,端口: 2080");
})