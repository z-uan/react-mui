export const StatusConstants = {
  // CODE
  CODE_OK: 'OK',
  CODE_BAD_REQUEST: 'BAD_REQUEST',
  CODE_UNAUTHORIZED: 'UNAUTHORIZED',
  CODE_FORBIDDEN: 'FORBIDDEN',
  CODE_NOT_FOUND: 'NOT_FOUND',
  CODE_SERVER_ERROR: 'SERVER_ERROR',

  // STATUS
  STATUS_OK: 200,
  STATUS_BAD_REQUEST: 400,
  STATUS_UNAUTHORIZED: 401,
  STATUS_FORBIDDEN: 403,
  STATUS_NOT_FOUND: 404,
  STATUS_SERVER_ERROR: 500,
};

export const FieldsConstants = {
  EMAIL: {
    REQUIRED: 'email.required',
    IN_VALID: 'email.in_valid',
  },
  USERNAME: {
    IN_VALID: 'username.in_valid',
    REQUIRED: 'username.required',
  },
  PASSWORD: {
    IN_VALID: 'password.in_valid',
    REQUIRED: 'password.required',
  },
  OTP_CODE: {
    IN_VALID: 'otp_code.in_valid',
    REQUIRED: 'otp_code.required',
    MAX_LENGTH: 'otp_code.maxlength',
    MIN_LENGTH: 'otp_code.minlength',
    ALREADY_EXIST: 'otp_code.already_exists',
  },
  TOKEN_VERIFY: {
    IN_VALID: 'token.in_valid',
    REQUIRED: 'token.required',
  },
};

const Constants = {
  API_BASE_URL: 'http://127.0.0.1:8000',
  COOKIES: {
    USER_ID: window.btoa('user_id'),
    REMEMBER: window.btoa('remember'),
    LOGGED_STATUS: window.btoa('logged'),
    USER_SESSION: window.btoa('user_session'),
    ACCESS_TOKEN: window.btoa('access_token'),
    REFRESH_TOKEN: window.btoa('refresh_token'),
  },
};

export default Constants;
