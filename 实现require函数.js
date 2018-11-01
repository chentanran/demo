
function $require(url){
    const fs = require("fs");
    const path = require("path");

    const fileName = path.join(__dirname,url);

    // $require.cache = $require.cache || {};

    // if($require.cache[filename]){
    //     return $require.cache[filename].exports;
    // }

    const filePath = __dirname;

    let code = fs.readFileSync(fileName,"utf8");

    let module = {url:fileName, exports:{}};

    let exports = module.exports;

    code = `(function($require, module, exports, __dirname, __filename){
        ${code}
      
    })($require, module, exports, __dirname, __filename)`;

    eval(code);

    // $require.cache[filename] = module;

    return module.exports;
}

let requires =  $require("./code/1.js");

console.log(requires);