// var att = {
//     name : 123,
//     age : 18,
//     gender : "女"
// };

// // let {name} = att;  第一种方式 将参数转换成变量

// let {name:username,age:userage} = att; //将参数值赋值给一个变量

// console.log(username,userage,name,age);  

let arr = {
    name : "arr",
    age : 13,
    gender : "男"
};

let { name } = arr;

username = name + 10;

console.log(username)