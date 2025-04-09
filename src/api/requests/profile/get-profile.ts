import { api } from 'api/client';
import { UserProfile } from 'helpers/types';

export const getProfileApi = async () => {
  const response = await api.get<UserProfile>('/profile');
  return response.data;
};
