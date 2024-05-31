/**
 * Sends a JSON response with a 500 status code and an error message.
 * @param {Object} res - The HTTP response object.
 * @param {Error} error - The error object containing the error message.
 */
const handleError = (res, error) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: error.message }));
};

module.exports = { handleError };
