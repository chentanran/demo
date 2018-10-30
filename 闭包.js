

   

// for(var i = 0; i < 10; i++){
//     (function(a){
//         setTimeout(function(){
//             console.log(a)
//          },500)
//     })(i)
// }

for(var i = 0; i < 10; i++){
    setTimeout(arr(i),300);
   
}
function arr(a){
    // console.log(a);
    return function(){
        console.log(a);
    }
    
}