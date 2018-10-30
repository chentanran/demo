// function test(resolve, reject) {
//     var timeOut = Math.random() * 2;
//     console.log('set timeout to: ' + timeOut + ' seconds.');
//     setTimeout(function () {
//         if (timeOut < 1) {
//             console.log('call resolve()...');
//             resolve('200 OK');
//         }
//         else {
//             console.log('call reject()...');
//             reject('timeout in ' + timeOut + ' seconds.');
//         }
//     }, timeOut * 1000);
// }

// var p1 = new Promise(test);
// var p2 = p1.then(function (result) {
//     console.log('成功：' + result);
// });
// var p3 = p2.catch(function (reason) {
//     console.log('失败：' + reason);
// });

// function fn(num){
//     return new Promise(function(resolve,reject){
//         if(typeof num == "number"){
//             resolve();
//         }else{
//             reject();
//         }
//     }).then(function(){   //成功执行的函数
//         console.log("参数是一个number");
//     }).then(null,function(){   //then 里 加一个 null   相当于 调用catch
//         console.log("参数不是一个number");
//     })
// }

// fn("123")

function fn(num){
    return new Promise(function(resolve,reject){
        if(typeof num == "number"){
            resolve( + num);
        }else{
            reject("typeerror");
        }
    })
}

fn(1).then(function(num){
    console.log("first:" + num);
    return num +1;
}).then(function(num){
    console.log("second" + num);
    return num +1;
}).then(function(num){
    console.log("third" + num);
    return num +1;
})

