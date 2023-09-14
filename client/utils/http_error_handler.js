export default class HttpErrorHandler {
    static throwHttpErrorMsg(e) {
        if (e !== undefined && e !== null) {
            if (e.hasOwnProperty('response')) {
                let response = e.response;
                if (response !== undefined && response !== null) {
                    if (response.hasOwnProperty('data')) {
                        let responseData = response['data'];
                        if (responseData && responseData.hasOwnProperty('message')) {
                            return responseData['message'];
                        }
                    }
                }
            }
        }
    }
}