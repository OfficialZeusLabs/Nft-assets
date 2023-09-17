import AccountRepository from "../repository/account_repo";
import Preconditions from "../utils/preconditions";
import ResponseHandler from "../utils/response_handler";
import { StatusCodes } from 'http-status-codes';

class ContractService {
    static async saveContract(req, res) {
        const { contract_token, id } = req.body;
        const badRequestError = Preconditions.checkNotNull({ contract_token });
        if (badRequestError) {
            return ResponseHandler.sendErrorResponse(res, StatusCodes.BAD_REQUEST, badRequestError);
        }

        const userExists = AccountRepository.findById(id)
        if (userExists) {
            // store contract token in details;
        }
    }
}

export default ContractService;