const { appendToFile } = require("../utils/appendToFile");
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
                `\nrouter.${reqType}("/", ${routesObject[reqType]})`,
            );
        break;
    }
  });
};
