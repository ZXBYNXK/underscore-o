import { mkdirSync } from "fs";
export default () => {
  mkdirSync("routes", (err) => {
      if (err) throw err;
    });
  mkdirSync("routes/api", (err) => {
    if (err) throw err;
  })

}