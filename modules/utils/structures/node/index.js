const createDirectories = require("../../createDirectories"),
structure = require("./structure");

module.exports = () => {
    console.log(structure);
    // config folder for containing secrets and database connector file
    createDirectories(structure["SECRET_PATH"]);

    // Create a directory to hold the route handler files
    createDirectories(structure["API_PATH"]);

    // Create a models directory to hold all the mongoose model files
    createDirectories(structure["MODELS_PATH"]);
}