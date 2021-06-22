// See declareAll.js in ./utils
const declareAll = require("../../../declareAll");

module.exports = () =>
    `${declareAll({ 
            "{port}": "require('./config')", 
            "express": "require('express')",  
            "server":"express()"
        })}\n` // TO-DO: Problem --should be at the bottom of file