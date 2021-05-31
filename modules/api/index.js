// _O: API Creator
const createRouteFiles = require("./createRouteFiles");
const initiliazeRoutesDirectory = require("./initilizeRoutesDirectory");
const declareAll = require("../utils/declareAll");
const appendToFile = require("../utils/appendToFile");

// MAIN FUNC
module.exports = ({api}) => {
    initiliazeRoutesDirectory();
    appendToFile("./server.js", declareAll({ express:"express", server: "express()" }));
    // DEBUG: api[...]
    // console.log(`API:`, api);

    // FOR EACH ENDPOINT IN FILE:
    Object.keys(api).forEach(endPoint => {
      // DEBUG: api[endpoints]
      console.log(`End-Point: /api/${endPoint}`);
      // See "./appendToFile.js"
      appendToFile(
        endPoint,
        declareAll({"{Router}":'require("express")', "router":"Router()"})
      );
      appendToFile(
        "./server.js",
        `const ${endPoint} = require("./routes/api/${endPoint}");\nserver.use('/api/${endPoint}', ${endPoint});`
      );
      createRouteFiles(endPoint, api[endPoint]);
    });
};

// EXTRAS:
// {api: {users}} = api.users = '/api/users' = ./routes/api/users.js - Default is 'api'