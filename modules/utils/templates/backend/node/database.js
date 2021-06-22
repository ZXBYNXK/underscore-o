const msgDefaults = require("./defaults").database;

module.exports = (
    {
      success,
      danger
    }
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
            console.log("${success || msgDefaults.success}");\n
          } catch(err) {\n
            console.log("${danger || msgDefaults.danger}");\n
            console.error(err);\n
            process.exit(1);\n
          }
    }`