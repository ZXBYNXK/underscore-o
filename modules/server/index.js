const express = require("express");
const server = express();
module.exports = async ({port, messages: {success, danger} }) => {
    try {
        server.listen(port, () => {
            console.log(success)
        })
    } catch (err) {
        console.log(danger);
    }
}