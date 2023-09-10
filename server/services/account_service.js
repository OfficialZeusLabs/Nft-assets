import ResponseHandler from "../utils/response_handler.js"
import { StatusCodes } from 'http-status-codes';

class AccountService {
    static register(req, res) {
        return ResponseHandler.sendResponseWithoutData(res, StatusCodes.OK, "Registration in progress");
    }
}

export default AccountService