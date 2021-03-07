# _O
## About:
```javascript
//  This package builds an entire MEN stack for you, files directories and all!

//    The '_O()' Function is only required to be called once with the required arguments
//  in order to create files and directories, that will contain the usual backend of a MEN stack application.

//      PS: In a future version there will hopefully be a feature that will run the backend automatically.

```

## How to use:
```javascript

//  How it will work
const _O = require("_O");

// Configure server
_O({
  server: {
    port: 5000,
    success: "Server connected.",
    danger: "Server connection error",
    },
});

// @ Next Configure database.
_O({
  database: {
    uri: "",
    success: "Database connected.",
    danger: "Database connection error",
    },
});

// @Next Creating models.
_O({
  models: {
    User: [
      // Multiple fields W/ Same value
      [
        ["name", "email", "password"],
        ["type:String", "required:true"],
      ],
      
      // Singles Feilds & Fields with different values 
      // Add another array bracket with same format as above.
      [
        ["timestamp"],
        ["type:Date", "default:Date.now()"],
      ],
    
    ],

    // Refs
    // Use it as a MongooseID
    Profile: [
      [
        ["user"],
        ["type:MongooseID", "ref:users"]
      ],
    ],
  },
});

// How to create the API
_O({
  api: {
    users: {
      // @next: require: ["Models/User", "Middleware/auth", "_O/Validator"],
      get: `async (req, res) => {
        try {
            const getAllUsers = await User.find();
            res.status(200).json(getAllusers);
        } catch {
            res.status(500).json({msg: "Server Error."})
        }
      }`,
      post: `async (req, res) => {
        try {
            const getAllUsers = await User.find();
            res.status(200).json(getAllusers);
        } catch {
            res.status(500).json({msg: "Server Error."})
        }
      }`,
      
      }
    },
    profiles: {
      // @next require: ["Models/User", "Middleware/auth", "_O/Validator"],
      get: `async (req, res) => {
                try {
                    const getAllUsers = await User.find();
                    res.status(200).json(getAllusers);
                } catch {
                    res.status(500).json({msg: "Server Error."})
                }
            }`,
      post: `async (req, res) => {
                try {
                    const getAllUsers = await User.find();
                    res.status(200).json(getAllusers);
                } catch {
                    res.status(500).json({msg: "Server Error."})
                }
            }`,
      user: {
        get: `async (req, res) => {
                try {
                    const getUserById = await User.findById();
                    res.status(200).json(getAllusers);
                } catch {
                    res.status(500).json({msg: "Server Error."})
                }
            }`,
        
    },
  },
});

// Recommended use example
const server = require("./server");
const database = require("./database");
const api = require("./api");
const models = require("./models");

// All of the below objects will be required, and filled out in the above pattern.
_O({
  server,
  database,
  api,
  models,
});

// You can store all secret strings here.
_O.secrets = {
  mongoUri: "-----------",
};
```
