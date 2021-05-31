// Creates any file type
const { writeFileSync } = require("fs")
module.exports = createFile = (path) => {
    writeFileSync(path)
}