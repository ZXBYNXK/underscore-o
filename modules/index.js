const server = require("./server"),
database = require("./database"),
api = require("./api"),
models = require("./models"),
secrets = require("./secrets"),
isEmpty = require("./utils/isEmpty"),
createCustomFiles = require("./utils/createCustomFiles"),
initNodeStructure = require("./utils/structures/node");

module.exports = _O = (input) => {

    console.log("Initilizing Application Directories... \n");
    initNodeStructure();

    console.log("_O: Creating model files... \n");
    !isEmpty(input["models"]) && models(input["models"]);

    console.log("_O: Creating server files... \n");
    !isEmpty(input["server"]) && server(input["server"]);

    console.log("_O: Creating database files... \n");
    !isEmpty(input["database"]) && database(input["database"]);

    console.log("_O: Creating API files... \n");
    !isEmpty(input["api"]) && api(input["api"], input["server"]);
    
    console.log("_O: Creating utility files... \n");
    !isEmpty(input["utils"]) && createCustomFiles("./utils/", input["utils"]);
    
    console.log("_O: Applying secrets... \n" + isEmpty(input["secrets"]) + "");
    !isEmpty(input["secrets"]) && secrets(input["secrets"]);

    console.log("_O: Done.");

}
