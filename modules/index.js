const server = require("./server");
const database = require("./database");
const api = require("./api");
const isEmpty = require("./utils/isEmpty");
module.exports = _O = (input) => {
    !isEmpty(input["server"]) && server(input["server"]);
    !isEmpty(input["database"]) && database(input["database"]);
    !isEmpty(input["api"]) && api(input["api"]);  
}