

/**
 * class Another Api`s Exception
 */
class ValidationHttpException extends Error {
    /**
     * @desc constructor method
     *
     * @param {string} message
     * @param {object | Array} data
     */
    constructor(message, data) {
        super(message);

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;
        this.status = 400;
        this.data = data;
    }

    /**
     * @return {number} statusCode
     */
    statusCode() {
        return this.status;
    }
}

module.exports = ValidationHttpException;
