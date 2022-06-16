const declareAll = require("../../../declareAll"),
parseInclude = require("../../../parseInclude");

module.exports = (REQUIREMENTS, include=['None'], routes, code=false) => {
	return `${declareAll(REQUIREMENTS)}\n${parseInclude(include)}${code ? `\n${code}` : ""}\n${routes}\nmodule.exports = router;`;
}
