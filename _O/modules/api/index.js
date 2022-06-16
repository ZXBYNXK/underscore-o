// _O: API Creator
// CAUTION: This file mutates the server.js file --Going to think of an alternative for SOC.
const structure = require("../utils/structures/node/structure");
const createRouteFile = require("../utils/createRouteFile"),
declareAll = require("../utils/declareAll"),
appendToFile = require("../utils/appendToFile"),
createCustomFiles = require("../utils/createCustomFiles"),
parseInclude = require("../utils/parseInclude");

module.exports = ({api}, {server}) => {
    // DEBUG: api[...]
    // console.log(`API:`, api);

    const { API_PATH, MIDDLEWARE_PATH } = structure;
     //console.log(`Middleware-Path: ${MIDDLEWARE_PATH}`)
    const REQUIREMENTS = {
    	"{Router}":'require("express")', 
    	"router":"Router()"
    	};
    
    // FOR EACH ENDPOINT IN FILE:
    Object.keys(api).forEach(endPoint => {
      
      // console.log(`End-Point: ${endPoint}\n`);
      
      let apiPathToEndPoint = API_PATH + endPoint;
      
      // DEBUG: api[endpoints]
      // console.log(`API-PATH: ${apiPathToEndPoint}\n`);
      
      if (endPoint === "middleware") {
      	createCustomFiles(MIDDLEWARE_PATH, api[endPoint]);
      } else {
      	createRouteFile(endPoint, REQUIREMENTS, api[endPoint]);
      	appendToFile(
        "./server.js",
        `\nconst ${endPoint}Router = require("${apiPathToEndPoint}");\nserver.use('/api/${endPoint}', ${endPoint}Router);`
      );
      
      }
    
    });

    appendToFile("./server.js", `\ndatabase()\nserver.listen(port || process.env.PORT, () => console.log("${server["success"]}"));`);
};



// Approach 0 (Stable Version)
/*
const structure = require("../utils/structures/node/structure");
const createRouteFile = require("../utils/createRouteFile"),
declareAll = require("../utils/declareAll"),
appendToFile = require("../utils/appendToFile"),
parseInclude = require("../utils/parseInclude");
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
      
      
      if (endPoint == "include") {
      	console.log("Including...")	
      	      appendToFile(
        	`${apiPathToEndPoint}.js`,
        	parseInclude(api[`${endPoint}`])
      	      );
      }

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

*/

