import { Row, Col, Pagination, Alert, Skeleton } from 'antd';
import { PostCard } from 'components/post-card/post-card';
import { Post, Pagination as PaginationType } from 'helpers/types';
import styles from './post-list.module.scss';

type PostListProps = {
  posts: Post[];
  pagination: PaginationType;
  loading: boolean;
  error: string | null;
  onPageChange: (page: number) => void;
};

export const PostList = ({
  posts,
  pagination,
  loading,
  error,
  onPageChange,
}: PostListProps) => {
  const { currentPage, totalCount, perPage } = pagination;

  if (loading) {
    return (
      <div className={styles.list}>
        <Row gutter={16}>
          {[...Array(9)].map((_, index) => (
            <Col xs={24} sm={12} md={8} span={8} key={index}>
              <div className={styles.skeletonCard}>
                <Skeleton.Image active className={styles.skeletonImage} />
                <Skeleton active paragraph={{ rows: 3 }} />
              </div>
            </Col>
          ))}
        </Row>
        <Pagination
          current={currentPage}
          total={totalCount}
          pageSize={perPage}
          onChange={onPageChange}
          className={styles.pagination}
        />
      </div>
    );
  }

  if (error) return <Alert message="Error" description={error} type="error" />;

  return (
    <div className={styles.list}>
      <Row gutter={16} className={styles.rows}>
        {posts.map((post) => (
          <Col xs={24} sm={12} md={8} span={8} key={post.id}>
            <PostCard post={post} />
          </Col>
        ))}
      </Row>

      <Pagination
        current={currentPage}
        total={totalCount}
        pageSize={perPage}
        onChange={onPageChange}
        className={styles.pagination}
      />
    </div>
  );
};
