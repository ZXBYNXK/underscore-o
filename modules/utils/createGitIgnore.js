const { appendFile } = require("fs");
module.exports = async () => {
  try {
    await appendFile(".gitignore", `config`, (err) => {
      if (err) throw err;
      console.log("Created .gitignore")
    });
  } catch (err) {
      console.error(err);
      process.exit(1);
  }
};
