const server = require("./server");
const database = require("./database");
const api = require("./api");
const isEmpty = require("./utils/isEmpty");
module.exports = _O = async (input) => {
    try {
        !isEmpty(input["api"]) && await api(input["api"])
        !isEmpty(input["database"]) && await database(input["database"])
        !isEmpty(input["server"]) && await server(input["server"]);
    } catch (err) {
        console.error(err);
    }
}