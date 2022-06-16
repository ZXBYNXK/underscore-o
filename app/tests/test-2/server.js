const {port} = require('./secrets');
const database = require('./secrets/db');
const express = require('express');
const server = express();



const usersRouter = require("./routes/api/users");
server.use('/api/users', usersRouter);

const profilesRouter = require("./routes/api/profiles");
server.use('/api/profiles', profilesRouter);

const postsRouter = require("./routes/api/posts");
server.use('/api/posts', postsRouter);

database()
server.listen(port || process.env.PORT, () => console.log("Server connected."));
