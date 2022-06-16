const mongoose = require("mongoose");

    const {uri} = require("./index");

    module.exports = async () => {

      try {

        mongoose.connect(uri, {

              useNewUrlParser: true,

              useUnifiedTopology: true,

              useCreateIndex: true,

              useFindAndModify: false,

            });

            console.log("Server Connecected (_O/Default-Msg)");

          } catch(err) {

            console.log("Server failed to connect... (_O/Default-Msg)");

            console.error(err);

            process.exit(1);

          }
    }
