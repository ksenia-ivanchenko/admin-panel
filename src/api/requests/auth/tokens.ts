import { api } from 'api/client';
import { getCookie, setCookie } from 'helpers/cookie';
import { logoutApi } from './logout';

export type TokenResponse = {
  access_token: string;
  refresh_token: string;
  access_expired_at: number;
  refresh_expired_at: number;
};

export const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await api.post<TokenResponse>(
      '/auth/token-refresh',
      {
        refresh_token: refreshToken,
      },
      {
        noAuth: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    const {
      access_token,
      refresh_token,
      access_expired_at,
      refresh_expired_at,
    } = response.data;

    setCookie('access_token', access_token, { expires: access_expired_at });
    setCookie('refresh_token', refresh_token, { expires: refresh_expired_at });

    localStorage.setItem('access_expired_at', String(access_expired_at));
    localStorage.setItem('refresh_expired_at', String(refresh_expired_at));

    console.log('токены обновлены, живем живем');
  } catch (error) {
    console.log('при обновлении токенов произошла ошибка:', error);
    throw error;
  }
};

export const checkAndRefreshToken = async () => {
  const refreshToken = getCookie('refresh_token');

  const accessExpTime = localStorage.getItem('access_expired_at');
  const refreshExpTime = localStorage.getItem('refresh_expired_at');
  const currentTime = Math.floor(Date.now() / 1000);

  if (accessExpTime && currentTime >= Number(accessExpTime)) {
    console.log('access_token истек, пробуем обновить');
    await refreshAccessToken(refreshToken);
  } else {
    console.log('access_token еще действителен');
  }

  if (refreshExpTime && currentTime >= Number(refreshExpTime)) {
    console.log('refresh_token истек, надо залогиниться');
    logoutApi();
  }
};
