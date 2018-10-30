const fs = require("fs");

fs.readFile("./1.txt","utf-8",function(res,data){
    if(res) return conson.log(res.message);
    console.log(data);
})