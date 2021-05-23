const appendServerFile = require("./appendToServerFile");
const createGitIgnore = require("../utils/createGitIgnore");
const declareAll = require("../utils/declareAll");
module.exports = async ({ port, danger, success }) => {
  try {
    appendServerFile(declareAll({ "{port}": "require('./config')" }));
    appendServerFile(
      `app.listen(port || process.env.PORT, () => console.log("Server Listening..."));`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
