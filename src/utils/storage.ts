import Cookies from 'js-cookie';
import Constants from './constants';

export const cookies = {
  get<T>(key: string): T {
    const value = Cookies.get(key);
    return value ? JSON.parse(value) : null;
  },
  set<T = string>(key: string, value: T, options?: Cookies.CookieAttributes) {
    Cookies.set(key, JSON.stringify(value), options);
  },
  remove(key: string, options?: Cookies.CookieAttributes) {
    Cookies.remove(key, options);
  },
  setAToken(value: string) {
    Cookies.set(Constants.COOKIES.ACCESS_TOKEN, value, {
      expires: Utils.getExpireMinutes(10),
    });
  },
  setRToken(value: string) {
    Cookies.set(Constants.COOKIES.REFRESH_TOKEN, value, {
      expires: Utils.getExpireDate(30),
    });
  },
  setUserSession(userSession: UserType) {
    Cookies.set(Constants.COOKIES.USER_SESSION, JSON.stringify(userSession), {
      expires: Utils.getExpireMinutes(10),
    });
  },
  setUserID(userId: number) {
    Cookies.set(Constants.COOKIES.USER_ID, userId.toString(), {
      expires: Utils.getExpireMinutes(10),
    });
  },
  setLogged(status: 'yes' | 'no') {
    Cookies.set(Constants.COOKIES.LOGGED_STATUS, status);
  },
  setRemember(payload: LoginType) {
    Cookies.set(Constants.COOKIES.REMEMBER, JSON.stringify(payload));
  },
  setLogin(data: LoginResults) {
    if (data?.user) {
      cookies.setUserSession(data?.user);
      if (data?.user?.id) {
        cookies.setUserID(data?.user?.id);
      }
    }
    cookies.setAToken(data?.access_token);
    cookies.setRToken(data?.refresh_token);
    cookies.setLogged('yes');
  },
  get logged(): boolean {
    const loggedStatus = Cookies.get(Constants.COOKIES.LOGGED_STATUS) || 'no';
    return loggedStatus === 'yes';
  },
  get aToken(): string {
    const token = Cookies.get(Constants.COOKIES.ACCESS_TOKEN);
    if (!token) {
      return '';
    }
    return token;
  },
  get rToken(): string {
    const token = Cookies.get(Constants.COOKIES.REFRESH_TOKEN);
    if (!token) {
      return '';
    }
    return token;
  },
  get userSession(): UserType | null {
    const userSession = Cookies.get(Constants.COOKIES.USER_SESSION);
    if (!userSession) {
      return null;
    }
    return JSON.parse(userSession);
  },
  get remember(): LoginType | null {
    const remember = Cookies.get(Constants.COOKIES.REMEMBER);
    if (!remember) {
      return null;
    }
    return JSON.parse(remember);
  },
  get userId(): number | null {
    const userId = Cookies.get(Constants.COOKIES.USER_ID);
    if (!userId) {
      return null;
    }
    return Number(userId);
  },
  removeDataLogged() {
    Cookies.remove(Constants.COOKIES.ACCESS_TOKEN);
    Cookies.remove(Constants.COOKIES.REFRESH_TOKEN);
    Cookies.remove(Constants.COOKIES.LOGGED_STATUS);
    Cookies.remove(Constants.COOKIES.USER_SESSION);
    Cookies.remove(Constants.COOKIES.USER_ID);
  },
  removeRemember() {
    Cookies.remove(Constants.COOKIES.REMEMBER);
  },
};
