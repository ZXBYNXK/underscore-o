const { appendToFile } = require("../utils/appendToFile");
module.exports = (fileName, code = false) =>
  appendToFile(
    `routes/api/${fileName}.js`,
    `${code && code}`,
  );
