/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param   {object | array} results
 * @param   {number} statusCode
 * @return  {object} response Body Success
 */
exports.success = (message, results, statusCode) => {
    return {
        message,
        error: false,
        code: statusCode,
        results,
    };
};

/**
 * @desc    Send any error response
 *
 * @param   {string} message
 * @param   {number} statusCode
 * @return  {object} response Body Error
 */
exports.error = (message, statusCode) => {
    // List of common HTTP request code
    const codes = [200, 201, 400, 401, 404, 403, 422, 500];

    // Get matched code
    const findCode = codes.find((code) => code == statusCode);

    if (!findCode) statusCode = 500;
    else statusCode = findCode;

    return {
        message,
        code: statusCode,
        error: true,
    };
};

/**
 * @desc    Send any validation response
 *
 * @param   {object | array} errors
 * @return  {object} response body Validation
 */
exports.validation = (errors) => {
    return {
        message: 'Validation errors',
        error: true,
        code: 422,
        errors,
    };
};
