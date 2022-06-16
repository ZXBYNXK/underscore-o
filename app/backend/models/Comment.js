module.exports = Comment = {
  	"Arguments": "{ timestamps:{} }",
  	"profile": {
 	  "type": "Schema.Types.ObjectId",
 	  "ref": "profiles", 	
  	},
  	"text": {
  	  "type": "String",
  	  "required": "true"
  	},  	
}

