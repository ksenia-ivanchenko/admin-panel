import React from 'react';
import { Card, Typography } from 'antd';
import { ProfileFieldList } from './profile-field-list/profile-field-list';
import { ProfileRoles } from './profile-roles/profile-roles';
import { Role } from 'helpers/types';
import styles from './profile-card.module.scss';

const { Title } = Typography;

type ProfileCardProps = {
  user: {
    phone: string;
    email: string;
    name: string;
    lastName: string;
    secondName: string;
    roles: Role[];
  };
};

export const ProfileCard = ({ user }: ProfileCardProps) => {
  const fullName = `${user.lastName || ''} ${user.name || ''} ${user.secondName || ''}`;

  return (
    <Card hoverable className={styles.card}>
      <Title level={3} className={styles.title}>
        Профиль пользователя
      </Title>
      <ProfileFieldList user={user} fullName={fullName} />
      <ProfileRoles roles={user.roles} />
    </Card>
  );
};
