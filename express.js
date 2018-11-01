const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send("你好啊");
})

app.listen(3000,() => {
    console.log("server http://127.0.0.1:3000");
})
