const express = require("express");
// 调用函数创建服务器
const app = express();
//自动义模板
app.engine("html", require("express-art-template"));
// 配置模板引擎
app.set("view engine", "html");
// 配置模板页面的存放路径
app.set('views','./art-page');

app.get("/",(req,res) => {
    res.render("index.html", {name:'小小', age: 19, hobby:['小夏','小王','小胡']});
})

app.listen(3000, () => {
    console.log("http://127.0.0.1:3000")
})

