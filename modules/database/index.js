const appendToFile = require("../utils/appendToFile")
/* 
  New: 
    Write the file as is and then possibly execute a shell script to install 
    requrirements which are npm and nodejs (Depenedencies: Express, Mongoose, bcryptjs)
    -- May leave an arbitrary option for the user to add but some dependencies are mandatory for 
    this application to work.
*/
module.exports = ({uri, danger, success}) => {
  appendToFile("./config/db.js", `const mongoose = require("mongoose");\n
    module.exports = async () => {\n   
      try {\n
        mongoose.connect("${uri}", {\n
              useNewUrlParser: true,\n
              useUnifiedTopology: true,\n
              useCreateIndex: true,\n
              useFindAndModify: false,\n
            });\n
            console.log("${success}" || "Connected to database.");\n
          } catch(err) {\n
            console.log("${danger}");\n
            console.error(err);\n
            process.exit(1)\n
          }
      }`)
}



// OLD: Causes errors --Cannot find package mongoose.
// Without nodejs and or npm packages: express and mongoose

// CODE:  



