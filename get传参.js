const express = require("express");
const bodyparser = require("body-parser")

const app = express();

app.use(bodyparser.urlencoded({extended:false}))

app.get("/user", (req,res) => {
    console.log(req.query)
    res.send("ok");
})

app.get("/user/:id/:name",(req,res) => {
    console.log(req.params)
    res.send("ok");
})

app.post("/user",(req,res) => {
    console.log(req.body)
    res.send("ok把");
})

app.listen(3001,() => {
    console.log("http://127.0.0.1:3001")
})