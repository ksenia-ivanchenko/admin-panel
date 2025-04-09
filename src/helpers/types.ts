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
