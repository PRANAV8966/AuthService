const ClientErrCodes = Object.freeze({
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
})

const ServerErrCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
})

const SuccessCodes = Object.freeze({
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
})

module.exports = {
    ClientErrCodes,
    ServerErrCodes,
    SuccessCodes
}