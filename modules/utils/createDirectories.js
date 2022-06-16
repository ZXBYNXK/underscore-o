const {mkdirSync, existsSync} = require("fs");
module.exports = createDirectories = (path) => 
        (path + "").split('/').reduce(
                (dirs, dir) => {
                        dirs += dir + "/";
                        !existsSync(dirs) && mkdirSync(dirs);
                        return dirs;
                },
                '',
        );
