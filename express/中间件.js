const express = require("express");
const querystring = require("querystring");

const app = express();

app.use((req,res,next) => {
    var str = "";
    req.on("data",(frag) => {
       str += frag;
    })

    req.on("end",(frag) => {
        let obj = querystring(frag);
        res.body = obj;
        next();
    })
})

app.get("/",(req,res) => {
    res.sendFile("/../about.html", {root:__dirname})
})

app.post("/postdata", (req,res) => {

    res.send(res.obj);
})

app.listen(3000,() => {
    console.log("http://127.0.0.1:3000")
})