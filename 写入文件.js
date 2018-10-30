//引入fs核心方法

const fs = require("fs");

fs.writeFile("./1.txt","233","utf-8",function(err){
    if(err) return console.log(err.message);
})