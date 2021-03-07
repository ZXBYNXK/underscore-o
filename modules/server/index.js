import appendServerFile from "./appendToServerFile";
import createGitIgnore from "../utils/createGitIgnore";
import requireAll from "../utils/requireAll";
export default ({ port, danger, success }) => {
    appendServerFile(requireAll({ "{port}": "./config" }));
    appendServerFile(
      `app.listen(port || process.env.PORT, () => console.log("Server Listening..."));`
    );
};
