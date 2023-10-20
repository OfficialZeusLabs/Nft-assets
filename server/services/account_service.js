import { StatusCodes } from 'http-status-codes';
import Strings from "../lang/strings.js";
import AccountModel from "../models/account_model.js";
import ProfileModel from "../models/profile_model.js";
import AccountRepository from "../repository/account_repo.js";
import Preconditions from "../utils/preconditions.js";
import ResponseHandler from "../utils/response_handler.js";
import { generateRandomCharacter } from "../utils/strings.js";
class AccountService {
    static async register(req, res) {
        const {
            brand_name, email
        } = req.body;

        const badRequestError = Preconditions.checkNotNull({
            brand_name,
            email
        });
        if (badRequestError) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, badRequestError);
        };
        let isEmailValid = Preconditions.validateEmail(email);
        if (!isEmailValid) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, Strings.INVALID_EMAIL);
        };
        const emailExists = await AccountRepository.findByEmail(email);
        if (emailExists) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, Strings.EMAIL_ALREADY_EXISTS);
        }
        try {
            const createAccount = await AccountModel.create(({
                brand_name,
                email
            }));
            await createAccount.save();
            return ResponseHandler.sendResponseWithoutData(res, StatusCodes.OK, Strings.ACCOUNT_CREATED);
        }
        catch (error) {
            console.error(error);
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, Strings.ERROR_RESPONSE);
        }
    }

    static async createProfile(req, res) {
        const { wallet_address } = req.body;
        try {
            const badRequestError = Preconditions.checkNotNull({ wallet_address });
            if (badRequestError) {
                return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, badRequestError);
            }
            const randomUsername = generateRandomCharacter();
            const newProfile = await ProfileModel.create({
                username: randomUsername,
                address: wallet_address
            });
            await newProfile.save();
            return ResponseHandler.sendResponseWithoutData(res, StatusCodes.CREATED, "Profile created successfully");
        }
        catch (error) {
            console.log(error);
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Error creating profile");
        }
    }

    static async fetchAccountProfile(req, res) {
        const { address } = req.params;
        const badRequestError = Preconditions.checkNotNull({ address });
        if (badRequestError) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, badRequestError);
        }
        try {
            const userProfile = await AccountRepository.findWalletAddress(address);
            if (!userProfile) {
                return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_GATEWAY, "Profile not found");
            } else {
                return ResponseHandler.sendResponseWithData(res, StatusCodes.OK, "User profile created", userProfile);
            }
        }
        catch (error) {
            console.log(error);
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Something went wrong");
        }
    }

    static async upsertProfile(req, res) {
        const { wallet, ...rest } = req.body;
        const badRequestError = Preconditions.checkNotNull({ wallet });
        if (badRequestError) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, badRequestError);
        }
        try {
            let { username } = { ...rest };
            let walletExists = await AccountRepository.findWalletAddress(wallet);
            if (walletExists) {
                let usernameExists = await AccountRepository.findByUsername(username);
                if (usernameExists) {
                    return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Username already exists");
                };
                let updateProfile = await ProfileModel.findOneAndUpdate({ address: wallet }, { ...rest });
                if (!updateProfile) {
                    return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Error updating profile");
                }
                return ResponseHandler.sendResponseWithoutData(res, StatusCodes.OK, "Profile updated successfully");
            } else {
                return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Wallet address not found");
            }
        }
        catch (error) {
            console.error(error);
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Something went wrong");
        }
    }
}

export default AccountService;

