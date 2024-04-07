import app from "./app";
import { configs } from "./config/config";

const port = Number(configs.port);

const main = async () => {
  app.listen(port, () => {
    console.log("app is listening on port: ", port);
  });
};

main();
