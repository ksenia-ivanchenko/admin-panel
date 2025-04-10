import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { PostList } from 'components';
import { getPostsRequest } from 'store/slices/postsSlice';
import { Typography } from 'antd';

const { Title } = Typography;

export const PostsPage = () => {
  const dispatch = useDispatch();

  const {
    data: posts,
    pagination,
    loading,
    error,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsRequest(pagination.currentPage));
  }, [dispatch, pagination.currentPage]);

  const handlePageChange = (page: number) => {
    dispatch(getPostsRequest(page));
  };

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Посты</Title>{' '}
      <PostList
        posts={posts}
        pagination={pagination}
        loading={loading}
        error={error}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
