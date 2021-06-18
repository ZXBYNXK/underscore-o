const appendToFile = require("../utils/appendToFile"),
serverTemplate = require("../utils/templates/backend/node/server");
// Make it Sync NOT async
module.exports = () => {

  // Appends to server file with templated code. 
  appendToFile(
    "./server.js", 
    serverTemplate()
  );
};