const server = require("./server");
const database = require("./database");
const api = require("./api");
const isEmpty = require("./utils/isEmpty");
module.exports = (input) => {
    !isEmpty(input["api"]) && api(input["api"])
    !isEmpty(input["database"]) && database(input["database"])
    !isEmpty(input["server"]) && server(input["server"]);
}