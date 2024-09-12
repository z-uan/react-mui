import axios from 'axios';

import { cookies } from './storage';
import Constants, { StatusConstants } from './constants';
import accountService from '../services/account.service';

export const guestRequest = axios.create({
  baseURL: Constants.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const privateRequest = axios.create({
  baseURL: Constants.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

privateRequest.interceptors.request.use(
  (config) => {
    if (cookies.aToken) {
      config.headers['Authorization'] = `Bearer ${cookies.aToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

privateRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;
    const originalRequest = config;

    if (
      !response ||
      originalRequest._retry ||
      response.status !== StatusConstants.CODE_OK
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const {
        code,
        data: { access_token, refresh_token },
      } = await accountService.rToken(cookies.rToken);
      if (access_token && refresh_token && code === StatusConstants.CODE_OK) {
        cookies.setAToken(access_token);
        cookies.setRToken(refresh_token);

        const bearerToken = `Bearer ${access_token}`;
        privateRequest.defaults.headers['Authorization'] = bearerToken;

        return privateRequest(originalRequest);
      } else {
        cookies.removeDataLogged();
      }
    } catch {
      cookies.removeDataLogged();
    }
  },
);

export default privateRequest;
