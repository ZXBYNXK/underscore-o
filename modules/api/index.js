const { Router } = require("express");
const router = Router();
module.exports = (api) => {
  console.log(22, api);
  Object.keys(api).forEach((endPoint) => {
    console.log(23, endPoint);
    (api[endPoint]).forEach(({type, handler, middleWare = false }) => {
      switch (type) {
        case "GET":
          router.get(
            endPoint,
            (middleWare || []),
            handler
          );
          break;
        case "POST":
          router.post(
            endPoint,
            (middleWare || []),
            handler
          );
          break;
        case "PUT":
          router.put(
            endPoint,
            (middleWare || []),
            handler
          );
          break;
        case "DELETE":
          router.delete(
            endPoint,
            (middleWare || []),
            handler
          );
          break;
        default:
          console.log(`Invalid or no route type provided for ${endPoint}`);
      }
    });
  });
  
};
