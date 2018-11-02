// const express = require('express');

// const app = express();

// app.get('/',(req,res) => {
//     res.send("你好啊");
// })

// app.listen(3000,() => {
//     console.log("server http://127.0.0.1:3000");
// })


const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"./about.html"));
})

app.get("/index",(req,res) => {
    res.sendFile("/index.html", {root: __dirname})
})

// app.get("")


app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
})