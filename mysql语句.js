// // 导入 express 模块
// const express = require('express')
// // 创建 express 的服务器实例
// const app = express()
const mysql = require("mysql");

// var mysql      = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
  })

// let select = "select * from node2"

// 查
//  const sqlStr1 = 'select * from node2'

// conn.query(sqlStr1, (err, result) => {
//   if (err) return console.log('获取数据失败！' + err.message)
//   console.log(result)
// })

// app.listen(3001, function() {
//     console.log('Express server running at http://127.0.0.1:3001')
//   })

// 增
// const list = {name:"一一", age:20,node1_id:10}
// const insert = "insert into node2  set ?"

// conn.query(insert,list,(err,result) => {
//     if(err) return console.log("获取数据失败")
//     console.log(result);
// })

// 删
// const deletes = "delete from node2 where id=?";

// conn.query(deletes,3,(err,result) => {
//     if(err) return console.log("数据有错");

//     console.log(result);
// })

// 改
const update = {id:3,name:'uu',age:45};

const updatas = "update node2 set ? where id=?"

conn.query(updatas,[update,update.id],(err,result) => {
    if(err) return console.log(err);
    console.log(result);
})