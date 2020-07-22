const server = require("./server");
const database = require("./database");
module.exports = (input) => {
    console.log(Object.keys(input))
    Object.keys(input).forEach(key => {
        switch(key) {
            case "server":
            server(input[key]);
            break;
            case "database":
            database(input[key]);
            break;
        }
    })
    return;
}