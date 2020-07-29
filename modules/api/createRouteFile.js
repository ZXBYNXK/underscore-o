const { appendFile } = require("fs");
module.exports = createRouteFile = (fileName, routesObject) => {
  const PATH = "routes/api/";

  // FOR EACH ENDPOINT IN ROUTE
  Object.keys(routesObject).forEach( async (prop) => {
    prop = prop.toLowerCase();
    switch (prop) {
      case "get":
      case "post":
      case "put":
      case "delete":
        // DEBUG: HTTP Method
        console.log(`HTTP/${prop.toUpperCase()}/ added...`);
        try {
            await appendFile(
                `${PATH + fileName}.js`,
                `\nrouter.${prop}("/", ${routesObject[prop]})`,
                (err) => {
                    if (err) throw err;

                    // DEBUG: FileName
                    console.log(`Saved file: ${fileName}`);
                }
            );
        } catch (err) {
            throw err;
        }
        break;
    }
  });
};
