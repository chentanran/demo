// let text = String.fromCodePoint(0x20BB7);   //可以得到多字符集的编码

// for(let i of text){
//     console.log(i);
// }

// let add = "07-01";

// console.log(add.includes("sta",3));  //第一个 是否有 第二个 从哪开始

// console.log(add.startsWith("end",6));  //开始的位置

// console.log(add.endsWith("start", 5))  //最后结束的位置

// console.log(add.repeat(3));  //会将字符串重复多遍

// console.log(add.padStart(15,"123"));  //自动补全字符串

// console.log(add.padEnd(5,"aa"));  //如果长度不够,返回原字符串/

// console.log(add.padStart(10,"xxxx-xx-xx")); //一般用于补全

// 模板字符串

// let a = "nihao";

// let b = " ${a} waa";

// console.log(b)

// let a = 10;

// console.log("hello world ${a} 你好")

// let a = 10;
// let b = 15;

// console.log(`hellow ${a} world ${b}`);

// java`
// class HelloWorldApp {
//   public static void main(String[] args) {
//     System.out.println(“Hello World!”); // Display the string.
//   }
// }
// `
// HelloWorldApp.main();
// let b = 10;

// let a = String.raw `你好啊\n${b}呜呜呜`;  //好像并不会多一个斜杠

// console.log(a);

// var a = String.raw({raw: 'test'},1,2,3);

// console.log(a)

// String.raw = function (strings, ...values) {
//     let output = '';
//     let index;
//     for (index = 0; index < values.length; index++) {
//       output += strings.raw[index] + values[index];
//     }
  
//     output += strings.raw[index]
//     return output;
//   }

var a = new RegExp(/abc/ig, 'i');

console.log(a);