import axios from "axios";
import Endpoints from "./endpoints";
import HttpSuccessDataHandler from "../../utils/http_success_data_handler";
import HttpErrorHandler from "../../utils/http_error_handler";

export default class APIServices {
  static async createPackage(
    requestBody: object,
    cb: (reponse: unknown | null, error: string | null) => void
  ) {
    axios
      .post(Endpoints.CREATE_PACKAGE, requestBody)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.throwHttpErrorMsg(error));
      });
  }
}
