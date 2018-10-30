const fs = require("fs");

// // 读取
// fs.readFile(__dirname + "/file/1.txt","utf-8",(err,data) => {    
//     if(err) return console.log(err.message);
//     console.log(data);
// })

// 写入
// fs.writeFile(__dirname+"/file/1.txt","写入一段文字","utf-8",(err) => {
//     if(err) return console.log(err.message);
// })

// 追加
// fs.appendFile(__dirname + "/file/1.txt","\n我追加了一段话","utf-8",(err)=>{
//     if(err) return console.log(err.message)
// })

// 拷贝
const { COPYFILE_EXCL } = fs.constants;

fs.copyFile(__dirname + "/file/1.txt",__dirname + "/file/2.txt",COPYFILE_EXCL,function(err){
    if(err) return console.log(err.message);
    console.log("拷贝成功");
})