const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.set("views", "../ejs");

app.get("/",(req,res) =>{
    res.render("index.ejs", {name:'张三',age:18, hobby:[1,3,4,5,6,7,8]});
})

app.listen(3000,() => {
    console.log("http://127.0.0.1:3000");
})