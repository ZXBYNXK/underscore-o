// _O: API Creator
import createRouteFile from "./createRouteFile";
import initiliazeRoutesDirectory from "./initilizeRoutesDirectory";
import appendToRouteFile from "./appendToRouteFile";
import appendToServerFile from "../server/appendToServerFile";
import declareAll from "../utils/declareAll";

// MAIN FUNC
export default ({ api }) => {
    initiliazeRoutesDirectory();
    appendToServerFile(declareAll({ express:"express", server: "express()" }));
    // DEBUG: api[...]
    // console.log(`API:`, api);

    // FOR EACH ENDPOINT IN FILE:
    Object.keys(api).forEach(async (endPoint) => {
      // DEBUG: api[endpoints]
      console.log(`End-Point: /api/${endPoint}`);
      // See "./createRouteFile.js"
     appendToRouteFile(
        endPoint,
        declareAll({"{Router}":'require("express")', "router":"Router()"})
      );
     appendToServerFile(
        `const ${endPoint} = require("./routes/api/${endPoint}");\nserver.use('/api/${endPoint}', ${endPoint});`
      );
     createRouteFile(endPoint, api[endPoint]);
    });
  }

// EXTRAS:
// {api: {users}} = api.users = '/api/users' = ./routes/api/users.js - Default is 'api'
