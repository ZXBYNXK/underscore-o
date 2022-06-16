const appendToFile = require("./appendToFile"),
parseInclude = require("./parseInclude"),
routeFileTemplate = require("./templates/backend/node/routeFileTemplate");

// Approach 1 (New Version - Stable)
module.exports = createRouteFile = (fileName, requirements, routesObject) => {
  const PATH = `./routes/api/${fileName}.js`;
  const REQUIREMENTS = requirements;
  let include = ['None'];
  let middleware = false;
  let routes = "";
  let code = "";

  // FOR EACH ENDPOINT IN ROUTE
  //console.log(PATH);
  Object.keys(routesObject).forEach( endPoint => {
  	 switch (endPoint) {
	      case "include":
		// DEBUG: HTTP Include 
		// console.log(`FILE createRouteFile.js: (_O/HTTP/INCLUDES/${routesObject[endPoint]}) -> (${PATH})`);
		include = routesObject[endPoint];
		break;
		
	      case "code":
	      	code = routesObject[endPoint];
	      	break;
	      default:
		Object.keys(routesObject[endPoint]).forEach((reqType) => {
		    
		    // DEBUG: HTTP Routes Object Raw
		    // console.log(routesObject);
		    
		    reqType = reqType.toLowerCase();
		    switch (reqType) {
		      case "get":
		      case "post":
		      case "put":
		      case "delete":
			// DEBUG: HTTP Method
			// console.log(`FILE (_O/HTTP/${reqType.toUpperCase()}/${fileName.toUpperCase()}) -> (${PATH})`);
			routes += `\nrouter.${reqType}("${endPoint}", ${middleware ? middleware + ", " : ""}${routesObject[endPoint][reqType]});`;
			break;
		    
		    }
	  	})
	  }
  });
  	 
  appendToFile(PATH, routeFileTemplate(REQUIREMENTS, include, routes, code));
	
};

/*
// Approach 0
const appendToFile = require("./appendToFile");
module.exports = createRouteFile = (fileName, routesObject) => {
  const PATH = "./routes/api/";
  // FOR EACH ENDPOINT IN ROUTE
  Object.keys(routesObject).forEach((reqType) => {
    reqType = reqType.toLowerCase();
    switch (reqType) {
      case "get":
      case "post":
      case "put":
      case "delete":
        // DEBUG: HTTP Method
        console.log(`"HTTP/${reqType.toUpperCase()}/" added handler... :)`);
        appendToFile(
                `${PATH + fileName}.js`,
                `\nrouter.${reqType}("/${fileName}", ${routesObject[reqType]})`,
            );
        break;
    }
  });
};
*/

