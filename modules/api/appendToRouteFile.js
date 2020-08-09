const { appendFile } = require("fs");
module.exports = async (fileName, code = false) =>
  await appendFile(
    `routes/api/${fileName}.js`,
    `${code && `\n${code}`}`,
    (err) => {
      if (err) throw err;
    }
  );
