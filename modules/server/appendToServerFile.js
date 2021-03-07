const { appendFileSync } = require("fs");
module.exports = (code = false) =>
  appendFileSync("server.js", `${code && `\n${code}`}`, (err) => {
    if (err) throw err;
});
