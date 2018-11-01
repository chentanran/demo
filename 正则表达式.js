// const r1 = /hello/;
// const r2 = /hello/u;   

// console.log(r1.unicode) // false  检测有没有带u的正则 
// console.log(r2.unicode) // true

// const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
// const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;

// console.log(tokenize(TOKEN_Y, '3a + 4'))
// // [ '3', '+', '4' ]
// console.log(tokenize(TOKEN_G, '3a + 4'))
// // [ '3', '+', '4' ]

// function tokenize(TOKEN_REGEX, str) {
//   let result = [];
//   let match;
//   while (match = TOKEN_REGEX.exec(str)) {
//     result.push(match[1]);
//   }
//   return result;
// }

// var a = /\d+(?=%)/.exec('100% of US presidents have been male');  // ["100"]
// var b =  /\d+(?!%)/.exec('that’s all 44 of them') ;

// var a = /\d+(?!%)/.exec('100% of US presidents have been male');  // ["100"]
// var b =  /\d+(?=%)/.exec('that’s all 44 of them') ;

// console.log(a,b);
console.log(/^(?=(\d+))\d+$/g.exec("123"))
