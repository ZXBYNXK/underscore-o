// _O: API Creator

const { appendFile, mkdir } = require("fs");

// MAIN FUNC
module.exports = async ({ api }) => {
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

  // MAIN VARS
  const PATH = "routes/api/";
  let fileName;

  // DEBUG: api[...]
  console.log(`API:`, api);

  // FOR EACH ENDPOINT IN FILE:
  Object.keys(api)
  .forEach((endPoint) => {
    // DEBUG: api[endpoints]
    console.log(`End-Point: /api/${endPoint}`);

    // FOR EACH ENDPOINT IN ROUTE
    Object.keys(api[endPoint])
    .forEach((prop) => {
      prop = prop.toLowerCase();
      switch (prop) {
        case "get":
        case "post":
        case "put":
        case "delete":
          // DEBUG: HTTP Method
          console.log(`HTTP/${prop.toUpperCase()}/ added...`);

          fileName = `${endPoint}.js`;

          appendFile(
            PATH + fileName,
            `\nrouter.${prop}("/", ${api[endPoint][prop]})`,
            (err) => {
              if (err) throw err;

              // DEBUG: FileName
              console.log(`Saved file: ${fileName}`);
            }
          );
          break;
      }
    });
  });
};

// EXTRAS:
// {api: {users}} = api.users = '/api/users' = ./routes/api/users.js - Default is 'api'
