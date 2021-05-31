const {appendFileSync} = require("fs");
module.exports = appendToFile = (path, code) => 
    appendFileSync(path, `\n${code}`, (err) => {
        if (err) throw err;
    });