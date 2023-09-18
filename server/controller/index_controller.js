import AccountController from "./account_controller.js";
import LaunchPadController from "./launch_pad_controller.js";

class IndexController {
    static initialize(app) {
        AccountController.initialize(app);
        LaunchPadController.initialize(app);
    }
}

export default IndexController;