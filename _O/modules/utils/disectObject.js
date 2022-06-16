const disectObjectKeys = require("./disectObjectKeys"),
disectObjectValues = require("./disectObjectValues");
module.exports = disectObject = (object, extractionType = "", dimensions = 1) => {
    let result = [],
    index = 0;
    switch (extractionType) {
        case "k":
            while (dimensions-- > 0) {
                result[index] = disectObjectKeys(object);
                index += 1;
            }

            break;

        case "v":

            while (dimensions-- > 0) {
                result[index] = disectObjectValues(object);
                index += 1;
            }

            break;
        
        default:

            while (dimensions-- > 0) {
                result[index] = disectObjecKeys(object);
                result[index + 1] =  disectObjectValues(object);
                index += 2;
            }
            break;

    }
    
    return result;

}