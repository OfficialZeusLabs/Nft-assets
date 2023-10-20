import Routes from "../routes/index_routes.js";
import AccountService from "../services/account_service.js";
class AccountController {
    static initialize(app) {
        app.post(Routes.REGISTER, AccountService.register);
        app.post(Routes.CREATE_PROFILE, AccountService.createProfile);
        app.get(Routes.FETCH_PROFILE, AccountService.fetchAccountProfile);
        app.put(Routes.UPSERT_PROFILE, AccountService.upsertProfile);
    }
}

export default AccountController;