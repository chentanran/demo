const fs = require("fs");

fs.readFile(__dirname + "/file/3.txt","utf-8",(err,data) => {
    if(err) return console.log(err.message);

    let datas = data.split(" ");

    let newarr = [];
    datas.forEach((value) => {
       let arr =  value.replace(" ","");
       if(arr.length > 0){
        newarr.push(arr.replace("=",":"));
       }
        
    })
    let str = newarr.join("\n");
   
    fs.writeFile(__dirname + "/file/3.txt", str , (err) => {
        if(err) return console.log(err.message);
        console.log("写入成功")
    })
})