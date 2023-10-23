import axios from "axios";
import Endpoints from "./endpoints";
import HttpSuccessDataHandler from "@/utils/http_success_handler";
import HttpErrorHandler from "@/utils/http_error_handler";

export default class APIService {
  static async fetchAllProjects(cb: any) {
    axios
      .get(`${Endpoints.FETCH_ALL_PROJECTS}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async fetchProjectDetail(id: string, cb: any) {
    axios
      .get(`${Endpoints.FETCH_PROJECT_DETAIL.replace(":id", id)}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async createLaunchPackage(requestBody: object, cb: any) {
    axios
      .post(Endpoints.LAUNCHPAD_CREATE_PACKAGE, requestBody)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async createProfile(requestBody: any, cb: any) {
    axios
      .post(Endpoints.CREATE_PROFILE, requestBody)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async upsertProfile(requestBody: any, cb: any) {
    axios
      .put(Endpoints.UPSERT_PROFILE, requestBody)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async fetchProfile(address: string, cb: any) {
    axios
      .get(Endpoints.FETCH_PROFILE.replace(":address", address))
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }
  static async updateProfile(requestBody: object, cb: any) {}
}
