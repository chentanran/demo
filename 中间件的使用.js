const express = require("express");
const queryString = require("querystring");

const app = express();

// app.use((req,res,next) => {
//     let str = "";
//     req.on("data", chunk => {
//         str += chunk;
//     })

//     req.on("end", () => {
//         let obj = queryString.parse(str)
//         res.body = obj;

//         next();
//     })
// })

app.get("/",(req,res) => {
    res.sendFile("/about.html", {root:__dirname});   
})

// app.post("/postdata", (req,res) => {
//     res.send(res.body);
// })

app.listen(3000, () => {
    console.log("http://127.0.0.1:3000")
})