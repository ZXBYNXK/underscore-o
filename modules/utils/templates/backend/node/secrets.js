module.exports = (secrets) => {
	let template = `module.exports = {\n`;
	
	Object.keys(secrets).forEach(secret => {
		template += `\t${secret}: "${secrets[secret]}",\n`
	});
	
	template += "\n}";

	
	return template;
}
