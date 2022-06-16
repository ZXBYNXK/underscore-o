const appendToFile = require('./appendToFile'),
createDirectories = require('./createDirectories');
module.exports = (middleware) => {
	const ROOT = "./routes/middleware/"
	createDirectories(ROOT);
	Object.keys(middleware).forEach(middlewareFile => {
		let path = `${ROOT}${middlewareFile}.js`
		appendToFile(path, middleware[middlewareFile]['code']);
	});
}
