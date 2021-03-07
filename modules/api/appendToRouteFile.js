const { appendFileSync } = require("fs");
module.exports = (fileName, code = false) =>
 appendFileSync(
    `routes/api/${fileName}.js`,
    `${code && `\n${code}`}`,
    (err) => {
      if (err) throw err;
    }
  );
