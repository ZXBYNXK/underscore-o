const appendToFile = require('./appendToFile'),
createDirectories = require('./createDirectories');
module.exports = (utils) => {
	const ROOT = "./utils/"
	createDirectories(ROOT);
	Object.keys(utils).forEach(utilsFile => {
		let path = `${ROOT}${utilsFile}.js`
		appendToFile(path, middleware[utilsFile]);
	});
}
