import axios from 'axios';
import { getCookie } from 'helpers/cookie';
import { checkAndRefreshToken } from './requests/auth';

declare module 'axios' {
  interface AxiosRequestConfig {
    noAuth?: boolean;
  }
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    if (config.noAuth) {
      return config;
    }

    try {
      await checkAndRefreshToken();

      const accessToken = getCookie('access_token');
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      config.params = {
        ...config.params,
        'access-token': accessToken,
      };

      return config;
    } catch (error) {
      console.error('ошибка при проверке или обновлении токенов', error);
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
