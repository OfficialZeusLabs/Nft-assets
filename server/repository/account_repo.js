import AccountModel from "../models/account_model.js";
import BaseRepository from "./base_repo.js";
import ProfileModel from "../models/profile_model.js";

class AccountRepository extends BaseRepository {
    static async findByEmail(email) {
        return super.findByEmail(AccountModel, email);
    }
    static async findById(id) {
        return super.findByEmail(AccountModel, id);
    }

    static async findByUsername(username) {
        return await ProfileModel.findOne({ username });
    }

    static async findWalletAddress(address) {
        return await ProfileModel.findOne({ address });
    }
}

export default AccountRepository;
