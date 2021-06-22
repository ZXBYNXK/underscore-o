// _O: API Creator
// CAUTION: This file mutates the server.js file --Going to think of an alternative for SOC.
const structure = require("../utils/structures/node/structure");
const createRouteFile = require("../utils/createRouteFile"),
declareAll = require("../utils/declareAll"),
appendToFile = require("../utils/appendToFile");

// MAIN FUNC
module.exports = ({api}) => {
    // DEBUG: api[...]
    // console.log(`API:`, api);
    const API_PATH = structure["API_PATH"];
    // FOR EACH ENDPOINT IN FILE:
    Object.keys(api).forEach(endPoint => {
      
      let apiPathToEndPoint = API_PATH + endPoint;
      
      // DEBUG: api[endpoints]
      console.log(`End-Point: ${apiPathToEndPoint}`);

      // See "./appendToFile.js"
      appendToFile(
        `${apiPathToEndPoint}.js`,
        declareAll({"{Router}":'require("express")', "router":"Router()"})
      );

      // --models
      // appendToFile(
      //   `${apiPathToEndPoint}.js`
      // )

      appendToFile(
        "./server.js",
        `\nconst ${endPoint} = require("${apiPathToEndPoint}");\nserver.use('${API_PATH}', ${endPoint});`
      );
      
      createRouteFile(endPoint, api[endPoint]);
    
    });

    appendToFile("./server.js", `server.listen(port || process.env.PORT, () => console.log("Server Listening..."));`);
};