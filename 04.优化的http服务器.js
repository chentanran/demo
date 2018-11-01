const http =require('http')
const fs =require('fs')
const path=require('path')
const server =http.createServer()

server.on('request',(req,res)=>{
    let url=req.url
    // res.writeHeader(200,{
    //     'Content-Type': 'text/html;charset=utf8'
    // })
    if(url === '/')  url ="/index.html"

    if( url ==='/' ||url ==='/index.html'){
        fs.readFile(path.join(__dirname, '/index.html'), (err, buf) => {
            if (err) return res.end('404 Not Found')
            res.end(buf)
        })    
    }else if( url ==='/movie.html'){
        fs.readFile(path.join(__dirname, url), (err, buf) => {
            if (err) return res.end('404 Not Found')
            res.end(buf)
        })   
    }else if( url ==='/about.html'){
        fs.readFile(path.join(__dirname, url), (err, buf) => {
            if (err) return res.end('404 Not Found')
            res.end(buf)
        })
    }else if( url ==='/css/1.css'){
        fs.readFile(path.join(__dirname, url), (err, buf) => {
            if (err) return res.end('404 Not Found')
            res.end(buf)
        })
    }else if( url ==='/js/1.js'){
        fs.readFile(path.join(__dirname, url), (err, buf) => {
            if (err) return res.end('404 Not Found')
            res.end(buf)
        })
    }
})
server.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000/')
})
