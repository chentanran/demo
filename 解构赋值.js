// var att = {
//     name : 123,
//     age : 18,
//     gender : "女"
// };

// // let {name} = att;  第一种方式 将参数转换成变量

// let {name:username,age:userage} = att; //将参数值赋值给一个变量

// console.log(username,userage,name,age);  

// let arr = {
//     name : "arr",
//     age : 13,
//     gender : "男"
// };

// let { name } = arr;

// username = name + 10;

// console.log(username)

// let {toString: s} = 123;
// s === Number.prototype.toString // true


// let {toString: s} = true;
// s === Boolean.prototype.toString // true
// console.log(s)

// let a = 1;   交换两个变量的值
// let b = 2;

// [a,b] = [b,a];

// console.log(a,b)

// function add(){
//     return [1,2,3];   返回一个数组
// }

// let [a,b,c] = add();

// console.log(a,b,c)

// function add(){   返回一个对象
//     return {
//         foo :123,
//         too : 345
//     }
// }

// let {foo,too} = add();

// console.log(foo,too)

// function add({a,b,c}){
//     return a + b + c;
// }

// let adds = add({a:1,b:2,c:3});  //利用函数传参传对象

// console.log(adds)

// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }

// console.log(map)

// const {readFile:a,writeFile:b} = require("fs");

// console.log(a,b)


// let s = '𠮷a';
// for (let ch of s) {
//   console.log(ch.codePointAt(0).toString(16));
// }

// for(let add of "hello"){
//     console.log(add);
// }


let a = 10;

let b = `"hello ${a}"`;


console.log(b)