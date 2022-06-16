/*
    Can append to top or bottom of specified file when given a path as argument
    appendToFile("./<ANY_NAME>/<ANY_NAME>/<ANY_FILE_NAME>.<ANY_FILE_EXSTENSION>", <CODE>, <OPTIONAL_TOP_APPEND)
    appendToFile("./routes/api/users.js", "const x = 1") --bottom 
    appendToFile("./routes/api/users.js", "const x = 'top'", true) --top
*/
const {appendFileSync, readFileSync, writeFileSync} = require("fs");
module.exports = appendToFile = (path, code, bottomTop = false) => 
    {
        
        if ( bottomTop === false ) {
            appendFileSync(path, `${code}\n`, (err) => {
                if (err) throw err;
            });
        }

        
        if (bottomTop === true) {
            appendFileSync(path, "");
            let file = readFileSync(path).toString().split("\n");
            file.splice(0, 0, code);
            writeFileSync(path, file.join("\n"));
        }
    }