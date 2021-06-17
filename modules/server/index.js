const appendToFile = require("../utils/appendToFile");

// TO-DO: Replace createGitIgnore with createFile
const createFile = require("../utils/createFile");
const createGitIgnore = require("../utils/createGitIgnore");

const declareAll = require("../utils/declareAll");

// Make it Sync NOT async
module.exports = ({ port, danger, success }) => {
  appendToFile(
    "./server.js", 
    (
      declareAll({ 
        "{port}": "require('./config')", 
        "express": "require('express')",  
        "app":"express()"
      }) 
    + 
    "\n" 
    +
      `app.listen(port || process.env.PORT, () => console.log("Server Listening..."));`
    )
  );
};













// module.exports = async ({ port, danger, success }) => {
//   try {
//     appendServerFile(declareAll({ "{port}": "require('./config')" }));
//     appendServerFile(
//       `app.listen(port || process.env.PORT, () => console.log("Server Listening..."));`
//     );
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };
