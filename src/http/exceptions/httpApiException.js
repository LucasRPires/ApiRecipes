
/**
 * class Another Api`s Exception
 */
class HttpApiException extends Error {
    /**
     * @desc constructor method
     *
     * @param {string} message
     */
    constructor(message) {
        super(message);

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;
        this.status = 503;
    }

    /**
     * @return {number} statusCode
     */
    statusCode() {
        return this.status;
    }
}

module.exports = HttpApiException;
