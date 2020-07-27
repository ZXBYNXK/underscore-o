const { appendFile } = require("fs");
module.exports = ({ api }) => {
  // DEBUG
  console.log(`API: ${api}`);
  // FOR EACH ENDPOINT
  Object.keys(api).forEach((endPoint) => {
    // DEBUG
    console.log(`End-Point: ${endPoint}`)
    Object.keys(api[endPoint]).forEach((prop) => {
      prop = prop.toLowerCase();
      switch (prop) {
        case "get":
        case "post":
        case "put":
        case "delete":
          // DEBUG
          console.log(`Method: ${prop}`);
          let fileName = `${endPoint.replace(/\//gi, "-").slice(1)}.js`
          appendFile(
            fileName,
            `\nrouter.${prop}("${endPoint}", ${api[endPoint][prop]})`,
            (err) => {
              if (err) throw err;
              console.log(`Saved file: ${}`);
            }
          );
          break;
      }
    });
  });
};
