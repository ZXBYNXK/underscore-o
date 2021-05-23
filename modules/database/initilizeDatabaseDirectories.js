const { appendFileSync, mkdirSync } = require("fs");
module.exports = () => {
  mkdirSync("config/db", (err) => {
      if (err) throw err;
      console.log("Created database directory.");
    });

  appendFileSync("config/db/index.js", ``, (err) => {
      if (err) throw err;
      console.log("Created database connector file.");
    });
  
};
