const { appendFile } = require("fs");
module.exports = async (code = false) =>
  await appendFile("server.js", `${code && `\n${code}`}`, (err) => {
    if (err) throw err;
  });
