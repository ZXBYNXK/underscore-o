// Create route file (i.e. project/routesusers.js)
import { appendFileSync } from "fs";

// @createRouteFile
// @param fileName  ( Name of route file. )
// @param routesObject  (An object that contains the )
export default createRouteFile = (fileName, routesObject) => {
  const PATH = "routes/api/";

  // FOR EACH ENDPOINT IN ROUTE
  Object.keys(routesObject).forEach( (prop) => {
    prop = prop.toLowerCase();
    switch (prop) {
      case "get":
      case "post":
      case "put":
      case "delete":
        // DEBUG: HTTP Method
        console.log(`HTTP/${prop.toUpperCase()}/ added...`);
        appendFileSync(
            `${PATH + fileName}.js`,
            `\nrouter.${prop}("/", ${routesObject[prop]})`,
            (err) => {
                if (err) throw err;
                // DEBUG: FileName
                console.log(`Saved file: ${fileName}`);           
            }
        );
    }
  })
}