// TO-DO: Parse object in order to generate model files for the database, in the proper sequence.
const appendToFile = require("../utils/appendToFile"),
declareAll = require("../utils/declareAll"),
structure = require("../utils/structures/node/structure"),
modelTemplate = require("../utils/templates/backend/node/models");

// Approach 1
module.exports = ({models}) => {
    // FILE: models --keys = [FILE, FILE, ...]
    
    
    Object.keys(models).forEach(model => {
    
        // Create model file path (i.e: ./models/User.js)
        const path = `${structure["MODELS_PATH"] + model}.js`;

	// Model contents will be the object that picks up values along the way then passed to 'modelTemplate()'
	let modelContents = {};
	
	let include = "";
	let args = "";
	
	// Obj
	let modelProperties = models[`${model}`];
        
        // Append mongoose variables values to file
        appendToFile(
            path,
            declareAll({"mongoose": "require('mongoose')"})
        );

        // DEBUG
        // console.log(`Models-0: File: ${file}.js\n`);

        // PROPERTIES: models[file] --keys = ["name/email/password", "timestamp", ...]
        Object.keys(modelProperties).forEach(property => {
            let modelContent = modelProperties[`${property}`];
                        
            // DEBUG
            // console.log("Models-1: (File object raw) ", models[`${file}`]);
            
            // If properties includes "/" then all key/values equal the same in object
            if (property.includes("/")) {

                // MULTI-PROPERTIES: proprties = "<prop>/<prop>/<prop>/..." 
                property.split("/").forEach(multiProperty => {
                
                    // DEBUG
                    // console.log(`Models-2: (Multi-Property): ${multiProperty}`);
                    // console.log(`Models-2.1: (keys)`, Object.keys(modelProperites[`${multiProperty}`]));
                    // console.log(`Models-2.2: (Values)`, Object.values(modelsProperties[`${multiProperty}`]));

		    // Assign content to be stored until templating process 
		    modelContents[`${multiProperty}`] = {...modelContent};
	            
		});
		

            // Else must be a single prop
            } else {

                // DEBUG
                // console.log(`Models-2.3: (Single Property) ${properties}`);
                // console.log(`Modles-2.4: (Value)`, models[`${file}`][`${properties}`]);
                // console.log(`Models-X: `, models[`${file}`]);
		
	      if ( property === "Include") {
	    	include = modelProperties[`${property}`];

	      } else if ( property === "Arguments") {
	    	args = modelProperties[`${property}`];	

	      } else {
	        // Assign content to be stored until templating process 
	        modelContents[`${property}`] = modelContent;
		}
            }

        });
            // DEBUG
	    // console.log(`Models-3 (Content Append): `, modelContents);
            
            // Append to model also the object 'modelContents' is required to output a valid mongoose model file. 
	    appendToFile(
	    	path,
	        modelTemplate(
	        	"mongoose",
	               	model,
	               	declareAll(modelContents, "const", "obj"),
	               	include,
	               	args
	        )
	    );
    });
}


// Approach 0
// module.exports = ({ models }) => {

//     // Use the given models argument from the other end to interpret each file and pursue (Continue below)
//     Object.keys(models).forEach(file => {

//         // TO-DO: Create model file & append a declareAll statement w/ required mongoose packages.

//         // DEBUG: Show file
//         console.log(`Model iteration (Create Modal File): ${file}`);

//         // Itereate through models object for props by specified file based on object key (i.e.: key == "User": {...})
//         // Key is referance to the file paramater passed as a key to access a specific file's expected props 
//         Object.keys(models[file]).forEach(properties => {
//             let binding = {};

//             // DEBUG: Show properties Multiple Props -> (i.e.: name/password/email), One Prop -> (i.e: name)
//             console.log(`Model iteration ( Append Property/ies ): ${properties}`)

//             // Split properties from "/" and fill the crrent properties variable with it's correspoding values using (... Operator)
//             properties.split("/").forEach(property => {
//                 binding[`${property}`] = {};
//                 let pair = {};
//                 //
//                 Object.keys(models[file][`${properties}`]).forEach(key => {
//                     pair[`${key}`] = null;
//                     Object.values(models[file][`${properties}`]).forEach(value => {
//                         pair[`${key}`] = value;
//                     })
//                 })
//                 // DEBUG: Show Model's property & key/value pair for that property/object
//                 // Find the corrispoding values by exctraction of keys and values of the object path given from above params
//                 // pair[`${key}`] = {...pair[`${key}`], };
//                 console.log(`VALUE: --> `, pair)
//                 binding[`${property}`] = {...binding[`${property}`], ...pair}
//                 console.log(`Model iteration (property:{...key/Value}): {${property} =`, binding[`${property}`]);
//             })
//         })
//     })
// }
