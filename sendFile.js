const express = require("express");
const path = require("path");
// 调用函数创造服务器
const app = express();

// app.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "./index.html"));
// })

app.get("/movie", (req,res) => {
    res.sendFile( "./movie.html", {root:__dirname})
})

app.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
})