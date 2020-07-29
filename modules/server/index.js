const appendServerFile = require("./appendToServerFile");
const createGitIgnore = require("../utils/createGitIgnore");
const requireAll = require("../utils/requireAll");
module.exports = async ({ port, danger, success }) => {
  try {
    appendServerFile(requireAll({ "{port}": "./config" }));
    appendServerFile(
      `app.listen(port || process.env.PORT, () => console.log("Server Listening..."));`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
