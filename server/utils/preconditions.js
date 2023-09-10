const emailValidator = require('email-validator');
class Preconditions {
    static checkNotNull(object) {
        for (let key in object) {
            let value = object[key];
            if (value === undefined || value === null || value === "") {
                return `${key} is missing`;
            }
        }
    }

    static validateEmail(email) {
        return emailValidator.validate(email);
    }
}

module.exports = Preconditions; 