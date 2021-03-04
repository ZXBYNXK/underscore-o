const { appendFileSync } = require("fs");
module.exports = appendFileSync(".gitignore", `config`, (err) => 
{
      if (err) throw err;
      console.log("Created .gitignore")
});
