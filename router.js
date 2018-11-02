const express = require("express");

const router = express.Router(); //创建一个路由对象

router.get("/",(req,res) => {
    res.sendFile("./index.html", {root: __dirname});
})

router.get("/movie",(req,res) => {
    res.sendFile("./movie.html", {root : __dirname});
})

router.get("/about",(req,res) => {
    res.sendFile("./about.html",{root : __dirname});
})

module.exports = router;