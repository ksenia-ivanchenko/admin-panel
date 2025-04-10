import { Tag, Typography, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './profile-roles.module.scss';
import { Role } from 'helpers/types';

const { Text } = Typography;

type ProfileRolesProps = {
  roles: Role[];
};

const roleColors: Record<string, string> = {
  user: 'blue',
  admin: 'volcano',
  moderator: 'purple',
};

export const ProfileRoles = ({ roles }: ProfileRolesProps) => {
  return (
    <div>
      <Text strong>Роли:</Text>
      <Space wrap className={styles.space}>
        {roles.map((role) => (
          <Tag
            key={role.role}
            icon={<UserOutlined />}
            color={roleColors[role.role]}
          >
            {role.name}
          </Tag>
        ))}
      </Space>
    </div>
  );
};
