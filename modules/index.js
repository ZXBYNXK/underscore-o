const server = require("./server"),
database = require("./database"),
api = require("./api"),
models = require("./models"),
isEmpty = require("./utils/isEmpty"),
initNodeStructure = require("./utils/structures/node");

module.exports = _O = (input) => {
    // initNodeStructure();
    // models --new 6-11-21
    !isEmpty(input["models"]) && models(input["models"]);

    // !isEmpty(input["server"]) && server(input["server"]);
    
    // !isEmpty(input["database"]) && database(input["database"]);
    
    // !isEmpty(input["api"]) && api(input["api"]);
}