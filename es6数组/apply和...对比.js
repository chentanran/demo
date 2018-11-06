var arr = [1,2,3,4,5];

function f(x,y,z,a,b){
    console.log(x+y+z+a+b);
}

// f.apply(null,arr);

// f(...arr);

// 合并数组

var arr2 = [1,3,4,5];

var  arr3 = [34,54,65];

var arr4 = [...arr,...arr2,...arr3];
console.log(arr4);

