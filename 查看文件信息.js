
const fs = require("fs");

fs.stat(__dirname , (err,stats) => {
    if(err) return console.log(err.message);

    console.log(stats);
})