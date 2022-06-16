const appendToFile = require("../utils/appendToFile"),
createSecretsTemplate = require("../utils/templates/backend/node/secrets");
module.exports = ({secrets}) => {
	const SECRET_PATH = "./secrets/index.js";
	appendToFile(
		SECRET_PATH,
		createSecretsTemplate(secrets)
	);
}
