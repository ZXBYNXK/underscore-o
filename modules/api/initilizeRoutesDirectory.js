const { mkdir } = require("fs");
module.exports = async () => {
    try {
        await mkdir("routes", (err) => {
          if (err) throw err;
        });
        await mkdir("routes/api", (err) => {
          if (err) throw err;
        });
        
      } catch (err) {
        throw err;
      }
};
