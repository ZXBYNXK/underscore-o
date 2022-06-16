/*
  (_O/NEW):
  declareAll(object=={name: value, ....}.,
  letConst==(let or const by default),
  type==(String by default)
  )
*/

module.exports = declareAll = (object, letConst="const", dataType="") => {
  
  const isObj = dataType == "obj";
  let template = isObj ? "{" : "";
  
  // DEBUG
  // console.log("DeclareAll.js:")
  // console.log(object)
  
  Object.keys(object).forEach((key) => {
    switch(dataType) {
      case "obj":
      		template += `\n\t${key}: {\n`
      		Object.keys(object[key]).forEach((property) => {
      			template += `\t\t${property}: ${object[key][property]},\n` 
      		})
      		template += `\t},\n`
        break;

      // Array:
      case "arr":
        break;

      // String
      default:
        	template += `${letConst} ${key} = ${object[key]};\n`;
        break;
    }

  });
  
  if (isObj) {
  	template += "}"	
  }
  
  // DEBUG
  // console.log(template);
  return template;

}

// TO-DO: 
//  Modify to declare ("let", "const") as second paramater, and third paramater ("str", "num", "obj", "arr")
