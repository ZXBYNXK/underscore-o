// See declareAll.js in ./utils
const declareAll = require("../../../declareAll");

module.exports = (server) => {
   const REQUIREMENTS = { 
            "{port}": "require('./secrets')",
            "database":"require('./secrets/db')", 
            "express": "require('express')",  
            "server":"express()"
        }
   return `${declareAll(REQUIREMENTS)}\n`; 

}
