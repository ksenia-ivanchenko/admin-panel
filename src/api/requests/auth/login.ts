import { api } from 'api/client';
import { setCookie } from 'helpers/cookie';
import { TokenResponse } from './tokens';
import { LoginData } from 'helpers/types';

export const login = async ({ email, password }: LoginData) => {
  try {
    const response = await api.post<TokenResponse>(
      '/auth/token-generate',
      {
        email,
        password,
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
    console.log('логин успешен', response.data);
  } catch (error) {
    console.log(`при попытке логина произошла ошибка: ${error}`);
  }
};
