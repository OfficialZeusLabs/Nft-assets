import Preconditions from "../utils/preconditions.js";
import ResponseHandler from "../utils/response_handler.js"
import { StatusCodes } from 'http-status-codes';
import Strings from "../lang/strings.js";
class AccountService {
    static async register(req, res) {
        const {
            title, description,
            whitepaper, goal,
            discord_link, website,
            discord_id, email,
            members, twitter,
            linkedin,
            nft_type, mint_date,
            mint_price, mint_supply,
            marketing_plan,
            more_info, presale,
        } = req.body;
        const files = req.files;

        const badRequestError = Preconditions.checkNotNull({
            title,
            description,
            email,
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
            let images = [];
            for (let file of files) {
                let result = await FileService.uploadToCloudinary(file.path);
                images.push(result);
                await FileService.unlinkFileSync(file.path);
            }
            const createPackage = await AccountModel.create(({
                title,
                description,
                discord_id,
                email, website,
                linkedin, twitter,
                mint_date, mint_supply,
                nft_type, mint_price,
                discord_link, members,
                whitepaper, goal,
                marketing_plan, more_info,
                presale, discord_link,
                artwork: images
            }));
            await createPackage.save();
            return ResponseHandler.sendResponseWithoutData(res, StatusCodes.OK, "Package Registration Successful");
        }
        catch (error) {
            console.error(error);
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, "Package Registration failed");
        }
    }
}

export default AccountService;
import AccountModel from "../models/account_model.js";
import AccountRepository from "../repository/account_repo.js";
import FileService from "./file_service.js";