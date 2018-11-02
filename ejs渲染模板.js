const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.set("views", "./ejs");

app.get("/", (req,res) => {
    res.render("./index.ejs",{name:"xiaowang",age:19,hobby:['chi','he','sleep','play']})
})

app.listen(3000,() => {
    console.log("http://127.0.0.1:3000")
})