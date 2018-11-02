const express = require("express");


const app = express();

app.use(express.static("./jQuery"))

// app.get("/",(req,res) => {
//     res.send({name: "小小", age:18});
// })

app.listen(2999,() => {
    console.log("http://127.0.0.1:2999");
})