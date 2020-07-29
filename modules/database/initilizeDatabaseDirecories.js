const { appendFile, mkdir } = require("fs");
module.exports = async () => {
  try {
    await mkdir("config/db", (err) => {
      if (err) throw err;
      console.log("Created database directory.");
    });
    await appendFile("config/db/index.js", ``, (err) => {
      if (err) throw err;
      console.log("Created database connector file.");
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
