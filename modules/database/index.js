const appendToFile = require("../utils/appendToFile"),
databaseTemplate = require("../utils/templates/backend/node/database");
/* 
  New: 
    Write the file as is and then possibly execute a shell script to install 
    requrirements which are npm and nodejs (Dependencies: Express, Mongoose, bcryptjs)
    -- May leave an arbitrary option for the user to add but some dependencies are mandatory for 
    this application to work.
*/

// Creates a database file for nodejs by default or with given arguments for returning a template
module.exports = ({success, danger}) => 
  appendToFile("./config/db.js", databaseTemplate({success, danger}))