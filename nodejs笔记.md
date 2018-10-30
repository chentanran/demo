# nodejs 基础命令



- global   node全局变量  || 相当于 js 中的 window

- process: 用于获取当前的Node进程信息,一般用于获取环境变量之类的信息

  -argv  属性返回一个数组, 用法: 第一个元素是process.execPath 第二个元素为当前执行的js文件路径, 剩余元素为其他命令行参数

  -stdin  输入

  -stdout 输出  process.stdout.write(文本内容);

  process.stdout.write('\033[2j');  清空控制台

  process.stdout.write('\033[0f');

  process.stdout.getWindowSize();




node 里面 选择这种方式调用方法 是为了 异步操作,而异步操作无法获取try

catch 捕获异常,所有在回调函数中,用了错误优先的做法

const fs = require("fs");

fs.readFile("xx","utf8",(err,data)=>{})  

## v8引擎

v8引擎最大的特点就是单线程

## 进程和线程

进程 : 正在进行中的文件

线程

## promise  ajax异步执行

​	状态:

pending: 等待中,或者进行中,表示还没有得到结果

​	resolved(fulfilled) : 已经完成,表示得到我们想要的结果,可以继续往下执行

​	rejected: 表示得到结果,结果并非我们所愿,因此拒绝执行



方法:

​	then: 可以接收构造函数中处理的状态变化,并分别对应执行,then有两个参数,第一个函数接收resolved状态的执行,第二个参数接收reject状态的执行

​	promise.all : 接收一个promise对象组成的数组作为参数,当这个数组所有的promise对象状态都编程resolved 或者 rejected的时候,它才会调用then方法

​	Promise.all相似的是，Promise.race都是以一个Promise对象组成的数组作为参数，不同的是，只要当数组中的其中一个Promsie状态变成resolved或者rejected时，就可以调用.then方法了

































