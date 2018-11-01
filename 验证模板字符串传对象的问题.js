let arr = {
    a :10,
    b : 12,
    c : 13
}

let end = {};

arr = `(function (end){
    ${arr};
})(end)`;



console.log(end)