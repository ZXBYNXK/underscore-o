import { appendFileSync } from "fs";
export default (fileName, code = false) =>
 appendFileSync(
    `routes/api/${fileName}.js`,
    `${code && `\n${code}`}`,
    (err) => {
      if (err) throw err;
    }
  );
