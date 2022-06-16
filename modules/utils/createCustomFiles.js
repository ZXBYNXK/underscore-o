const appendToFile = require('./appendToFile'),
parseInclude = require('./parseInclude'),
createDirectories = require('./createDirectories');
module.exports = (path, object) => {
	console.log(object) // <-
	// createDirectories(path);
	Object.keys(object).forEach(key => {
		const PATH = `${path}${key}.js`
		let include = object[key]['include'] || false;
		let code = object[key]['code'] || false;
		appendToFile(PATH, `${include ? parseInclude(include) : ""}\n${code ? code : ""}`);
	});
}
