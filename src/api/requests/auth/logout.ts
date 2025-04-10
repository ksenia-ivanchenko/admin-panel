import { deleteCookie } from 'helpers/cookie';

export const logoutApi = () => {
  deleteCookie('access_token');
  deleteCookie('refresh_token');
  localStorage.removeItem('access_expired_at');
  localStorage.removeItem('refresh_expired_at');
};
