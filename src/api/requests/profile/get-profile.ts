import { api } from 'api/client';

export type Role = {
  role: string;
  name: string;
};

export type Status = {
  code: number;
  name: string;
};

export type UserProfile = {
  id: number;
  phone: string;
  email: string;
  name: string;
  lastName: string;
  secondName: string;
  roles: Role[];
  status: Status;
  isActive: boolean;
  updatedAt: string;
  createdAt: string;
};

export const getProfileApi = async () => {
  try {
    const response = await api.get<UserProfile>('/profile');
    console.log('данные профиля получены:', response.data);
    return response.data;
  } catch (error) {
    console.log('при получении данных профиля произошла ошибка:', error);
    throw error;
  }
};
