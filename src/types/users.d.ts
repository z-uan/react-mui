declare type LoginType = {
  username: string;
  password: string;
  remember?: boolean;
};

declare type UserType = {
  id: number;
  email?: string | null;
  username?: string | null;
  fullname?: string | null;
  user_code?: string | null;
};

declare type RTokenResponse = DataResponse<{
  access_token: string;
  refresh_token: string;
}>;

declare type LoginResults = {
  access_token: string;
  refresh_token: string;
  user?: UserType;
};

declare type LoginResponse = DataResponse<LoginResults>;

declare type UserInfoResponse = DataResponse<UserType>;
