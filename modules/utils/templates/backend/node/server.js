const declareAll = require("../../../declareAll");
module.exports = () =>
    `${declareAll({ 
            "{port}": "require('./config')", 
            "express": "require('express')",  
            "app":"express()"
        })}\n
        app.listen(port || process.env.PORT, () => console.log("Server Listening..."));`