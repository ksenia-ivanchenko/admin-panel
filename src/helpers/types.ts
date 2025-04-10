export type LoginData = {
  email: string;
  password: string;
};

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

export type Post = {
  id: number;
  title: string;
  code: string;
  authorName: string;
  previewPicture: {
    id: number;
    name: string;
    url: string;
  };
  tagNames: string[];
  updatedAt: string;
  createdAt: string;
};

export type Pagination = {
  currentPage: number;
  pageCount: number;
  perPage: number;
  totalCount: number;
};
