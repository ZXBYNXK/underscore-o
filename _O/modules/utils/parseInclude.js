const declareAll = require("./declareAll"),
requireString = require("./requireString"),
isEmpty = require("./isEmpty");

const defaults = { 
	path: {
		models: (fileName) => {
			return `../../models/${fileName}`;
		},
		
		middleware: (fileName) => {
			return `../middleware/${fileName}`;
		},
		
		utils: (fileName) => {
			return `../../utils/${fileName}`;
		},
		secrets: (fileName) => {
			return `../../secrets`;
		}
		
	}
	
}

module.exports = parseInclude = (includeArray) => {
	let template = "";
	
	if (isEmpty(includeArray)) {
		console.log(`Error -> _O/errors/api/include -> include: ${includeArray || 'CONSOLE-CANNOT-LOG'}\n`)
		return 1;
	}
	
	
	includeArray.forEach((includeString) => {
			
		const options = includeString.includes(":") ? includeString.split(":") : false,
		mainOption = options[0];
						
			switch(mainOption) {
				
				case "Models":
					console.log(`[+] (_O/INCLUDE/MODELS/${options[1]}) -> (${defaults.path.models(options[1])})\n`);
					template += `${requireString(options[1], defaults.path.models(options[1]))};\n`
					break;
				
				case "Utils":
					template += `${requireString(options[1], defaults.path.utils(options[1]))};\n`
					break;
				
				case "Middleware":
					template += `${requireString(options[1], defaults.path.middleware(options[1]))};\n`
					break;

				case "Secrets":
					template += `${requireString("{ " + options[1] + " }", defaults.path.secrets())};\n`
					break;

				default:
					if (options) {
						template += `${requireString(options[0], options[1])};\n`;
					} else {
					  	console.log(`Error -> _O/errors/api/include -> include: [${includeString || 'CONSOLE-CANNOT-LOG'}, ...]\n`);	
					}					
					break;
			}
				
	})
	return template;
}
