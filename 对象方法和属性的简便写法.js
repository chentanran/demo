// let a = 1;
// let b = 2;
// let c = 3;

// let arr = {
//     a,
//     b,
//     c,
//     att: () => 123
// }

// console.log(arr);

let a = 10;
let b = 20;
let c = 30;

let att = {
    a,
    b,
    c
}

let { a : name } = att;

console.log(name);