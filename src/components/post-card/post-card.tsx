import { Card, Typography, Tag, Image } from 'antd';
import { getDate } from 'helpers/getDate';
import { Post } from 'helpers/types';
import styles from './post-card.module.scss';

const { Title, Text } = Typography;

type PostCardProps = {
  post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { previewPicture, title, authorName, tagNames, updatedAt } = post;
  const { url: imageUrl, name: imageAlt } = previewPicture;

  return (
    <Card
      hoverable
      cover={<Image src={imageUrl} alt={imageAlt} className={styles.image} />}
    >
      <Title level={4}>{title}</Title>
      <Text type="secondary">{authorName}</Text>
      <div className={styles.tags}>
        {tagNames.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <Text type="secondary">Updated at: {getDate(updatedAt)}</Text>
    </Card>
  );
};
