

var i = [..."xiaowang"];

//console.log(i);  //[ 'x', 'i', 'a', 'o', 'w', 'a', 'n', 'g' ]


function f(str){
    console.log(str.length)
}

// f("'x\uD83D\uDE80y'.length");


// function length(str) {
//     return [...str].length;
//   }
  
//   console.log(length('x\uD83D\uDE80y')) // 3

//   function* add(){
//       var index = 0
//       while(index < 4)
//       yield index++;
//   }

//   console.log(add().next().value)
//   console.log(add().next().value)
//   console.log(add().next().value)

//   console.log(add().next().value)
//   console.log(add().next().value)
//   console.log(add().next().value)

console.log(Array.from([1, 2, 3], (n) => n +1))