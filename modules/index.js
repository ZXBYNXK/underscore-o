const server = require("./server");
const database = require("./database");
const api = require("./api");
const models = require("./models")
const isEmpty = require("./utils/isEmpty");
module.exports = _O = (input) => {
    
    // models --new 6-11-21
    // !isEmpty(input["models"]) && models(input["models"]);

    !isEmpty(input["server"]) && server(input["server"]);
    
    !isEmpty(input["database"]) && database(input["database"]);
    
    !isEmpty(input["api"]) && api(input["api"]);
}