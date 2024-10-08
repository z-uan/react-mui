import privateRequest, { guestRequest } from '../utils/request';

const AccountConstants = {
  LOGIN_URL: '/users/api/auth/login',
  USER_INFO_URL: '/users/api/auth/user-info',
  REFRESH_TOKEN_URL: '/users/api/auth/refresh-token',
};

export default {
  async login(payload: LoginType): Promise<LoginResponse> {
    const res = await guestRequest.post<LoginResponse>(
      AccountConstants.LOGIN_URL,
      {
        username: payload?.username,
        password: payload?.password,
      },
    );
    return res?.data;
  },
  async rToken(refreshToken: string): Promise<RTokenResponse> {
    const res = await guestRequest.post<RTokenResponse>(
      AccountConstants.REFRESH_TOKEN_URL,
      {
        refresh_token: refreshToken,
      },
    );
    return res?.data;
  },
  async userInfo(): Promise<UserInfoResponse> {
    const res = await privateRequest.get<UserInfoResponse>(
      AccountConstants.USER_INFO_URL,
    );
    return res?.data;
  },
};
