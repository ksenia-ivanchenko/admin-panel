import { api } from 'api/client';
import { Post, Pagination } from 'helpers/types';

export const getPostsApi = async (
  page: number = 1
): Promise<{
  posts: Post[];
  pagination: Pagination;
}> => {
  const response = await api.get<Post[]>(`/manage/posts?page=${page}`);

  const headers = response.headers;

  const pagination: Pagination = {
    currentPage: parseInt(headers['x-pagination-current-page'], 10),
    pageCount: parseInt(headers['x-pagination-page-count'], 10),
    perPage: parseInt(headers['x-pagination-per-page'], 10),
    totalCount: parseInt(headers['x-pagination-total-count'], 10),
  };

  return {
    posts: response.data,
    pagination,
  };
};
