# \_O

```javascript
//  Build an entire back-end by just installing _O

//  How it will work
const _O = require("_O");

// How to create the server
_O({
  server: {
    port: 5000,
    messages: {
      danger: "------------",
      success: "-----------",
    },
  },
});

// How to create the database.
_O({
  database: {
    uri: "-------------",
    messages: {
      danger: "--------",
      success: "-------",
    },
  },
});

// How to create the models.
_O({
  models: {
    User: [
      [
        // Multiple fields
        ["name", "email", "password"],
        {
          type: String,
          required: true,
        },
      ],
      [
        // Just a Single Feild
        ["dateCreated"],
        {
          type: Date,
          default: Date.now,
        },
      ],
    ],

    // Refs
    // Use it as a MongooseID
    Profile: [
      [
        ["user"],
        {
          type: "MongooseID",
          ref: "users",
        },
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
    },
  },
});

// You can even
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
