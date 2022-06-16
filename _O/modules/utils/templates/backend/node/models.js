const parseInclude = require("../../../parseInclude");

module.exports = (type, name, contents, include=false, args=false) => {
  
  switch(type) {
    	case "mongoose": 
    		let schemaName = `${name}Schema`;
    		
    		return `${include ? parseInclude(include) : ""}const ${schemaName} = new mongoose.Schema(${contents}${args ? `,${args}` : ""});\nmodule.exports = mongoose.model(${name}, ${schemaName});`;
	
  }
  
}
