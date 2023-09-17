import Routes from "../routes/index_routes.js";
import AccountService from "../services/account_service.js";
import Upload from "../utils/uploads.js";

class AccountController {
    static initialize(app) {
        app.post(Routes.REGISTER, Upload.imageUpload().array('image'), AccountService.register);
    }
}

export default AccountController;