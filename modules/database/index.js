const mongoose = require("mongoose");
module.exports = ({ uri, danger, success }) => {
   mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(success || "Connected to database.");
  };
