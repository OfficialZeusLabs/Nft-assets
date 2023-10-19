import AccountRoutes from "./account_routes.js";
import LaunchPadRoutes from "./launch_pad_routes.js";
import FileRoutes from "./file_routes.js";
import ContractRoutes from "./contract_routes.js";
import ProjectRoutes from "./project_routes.js";
import { API_VERSION } from "../constants.js";

const Routes = {
    ...AccountRoutes(API_VERSION),
    ...LaunchPadRoutes(API_VERSION),
    ...FileRoutes(API_VERSION),
    ...ContractRoutes(API_VERSION),
    ...ProjectRoutes(API_VERSION)
}

export default Routes;