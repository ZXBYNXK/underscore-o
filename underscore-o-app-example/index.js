const _O = require("../_O");
const { api, server, models, database, secrets, utils } = require("./backend");
// Note 
// None of the above variables are technically required, only the object itself as argument.
// E.x:
// _O({api}); or _O({}) --Will not break anything, but utilize only if given.
// Prototype / only creates backend MEN Stack (Current Mission) 
_O(
    {
        api,
        server, 
        models, 
        database, 
        secrets,  
        utils
        // ^ All Optional ^
    }
);

// TO THE FUTURE
// _O(
//     ...    
//     :{
//         "BE": "Java",
//         "FE": "Angular",
//         "BED": ["Spring"]
//     }
// )
