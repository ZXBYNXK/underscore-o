module.exports = (
    {
        success = "Server Connecected (_O/Default-Msg)", 
        danger = "Server failed to connect... (_O/Default-Msg)"}
    ) => 
    `const mongoose = require("mongoose");\n
    const {uri} = require("./config");\n
    module.exports = async () => {\n
      try {\n
        mongoose.connect(uri, {\n
              useNewUrlParser: true,\n
              useUnifiedTopology: true,\n
              useCreateIndex: true,\n
              useFindAndModify: false,\n
            });\n
            console.log("${success}" || "Connected to database.");\n
          } catch(err) {\n
            console.log("${danger}");\n
            console.error(err);\n
            process.exit(1);\n
          }
    }`