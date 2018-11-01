// let  [a,b,c] = [1,2,3];

// console.log(a,b,c)

//等号右边不是数组会报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//       yield a;
//       [a, b] = [b, a + b];
//     }
//   }
  
//   let [first, second, third, fourth, fifth, sixth] = fibs();
//   console.log(first);

// let [x = 1] = [undefined];
// // x // 1
// console.log(x);

// let [x = 1] = [null];  //es6 默认是使用 === null 严格意义上不是三等 所有会覆盖初始值
// // x // null
// console.log(x)

// let x;
// if ([1][0] === undefined) {
//   x = f();
// } else {
//   x = [1][0];
// }

// console.log(x)

// let { bar, foo } = { foo: "aaa", bar: "bbb" };
// foo // "aaa"
// bar // "bbb"
// console.log(foo)
// console.log(bar)

// let { baz } = { foo: "aaa", bar: "bbb" }; //属性名必须和变量名一致
// baz // undefined
// console.log(baz)

// ({} = [true, false]);
// ({} = 'abc');
// ({} = []);

// let arr = [1,3,5];

// ({1:first,[arr.length-1]:last} = arr)

// console.log(first,last)

// ({random,floor,ceil} = Math);  //可以直接找对象中的方法

// console.log(random,floor,ceil)

const [a,b,c,d,e,f,g] = "hellow";

console.log(a,b,c,d,e,f,g);