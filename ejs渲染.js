const express = require("express");

const app = express();
//使用app.set()
app.set('view engine' , 'ejs');
//设置模板的默认存放路径 app.set('views', '模板页面的具体存放路径')
app.set('views', './ejs');

app.get('/',(req,res) => {
    res.render('index.ejs', {name:'zs',age:20,hobby: ['吃','睡','唱']})
})

app.listen(3000,() => {
    console.log("http://127.0.0.1:3000");
})