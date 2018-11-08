const s = new Set();

let arr = [1,2,3,4,5,6,7,8];

arr.forEach(x => s.add(x));

for(let i  of  s){
    // console.log(i);
}



const arr1 = new Set([1,,3,2,33,43,4,35,5,35,5,53]);

// console.log(...arr1);

// const set1 = new Set(document.querySelectorAll("div"));

// console.log(arr1.size)

// console.log(arr1.delete(2))

// console.log(arr1.has(53))

// console.log(arr1.clear());

// console.log(...arr1)

// console.log(Array.from([1,3,4,5,6,7,8]))

function array(arr){
    return Array.from(new Set(arr))
}

// console.log(array([1,3,4,5,6,6,7,7,6,5,4,3,3,2,1]))\\

const arr5 = new Set([1,3,4,5,7,9]);

for(let a of arr5.keys()){
    // console.log(a);
}

for(let b of arr5.values()){
    // console.log(b)
}

for(let c of arr5.entries()){
    // console.log(c)
}

// arr5.forEach(a => console.log(a));

for(let d of arr5){  //构造器是values, 可以省略 values()  直接调用set循环遍历
    // console.log(d)
}

// 去重
let set = new Set([1,3,5,7,9,11]);

let arr6 = [...set];
// console.log(arr6);\

set = new Set([...set].filter(x => (x > 2)))

// console.log(set.has(3))

const arr7 = new Set([1,3,5,7,9].map(x => x+1))

// console.log(arr7)

const a = [{a:3},{b:4}];

const ws = new WeakSet(a);
// console.log(ws);

const m = new Map();
const o = {}
m.set(o,'123');
// console.log(m.get(o))

const ab = new Map();

ab.set(1,"aaa");
ab.set(2,"bbb")

console.log(ab.get(1));
console.log(ab.get(2))