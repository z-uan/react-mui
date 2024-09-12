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
