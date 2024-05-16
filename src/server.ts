import app from "./app";
import { configs } from "./config/config";
import { seedSuperAdmin } from "./modules/user/user.seedSuperAdmin";

const port = Number(configs.port);

const main = async () => {
  seedSuperAdmin();
  app.listen(port, () => {
    console.log("app is listening on port: ", port);
  });
};

main();
