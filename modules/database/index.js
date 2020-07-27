const mongoose = require("mongoose");
module.exports = async ({ uri, danger, success }) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(success || "Connected to database.");
  } catch (err) {
    console.log(danger || "");
    console.error(err);
    process.exit(1);
  }
};
