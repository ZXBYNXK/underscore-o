const express = require("express");
const server = express();
const routes = require("../api");
module.exports = async ({port, messages: {success, danger} }) => {
    server.use(routes);
    try {
        server.listen(port, () => {
            console.log(success)
        })
    } catch (err) {
        console.log(danger);
    }
}