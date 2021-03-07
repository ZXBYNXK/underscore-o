// Main file
//      Responsible for interperting an object passed to it
// _O({api, database})
import server from "./server";
import database from "./database";
import api from "./api";
import isEmpty from "./utils/isEmpty";
export default _O = (input) => {
    !isEmpty(input["api"]) && api(input["api"])
    !isEmpty(input["database"]) && database(input["database"]);
    !isEmpty(input["server"]) &&  server(input["server"]);
}