const api = require("./api"),
database = require("./database"),
models = require("./models"),
server = require("./server"),
secrets = require("./secrets"),
utils = require("./utils");

module.exports = {
	api,
	database,
	server,
	models,
	secrets,
	utils
}
