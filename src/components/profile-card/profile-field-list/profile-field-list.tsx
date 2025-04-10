import React from 'react';
import { Descriptions } from 'antd';
import styles from './profile-field-list.module.scss';

type ProfileFieldListProps = {
  user: {
    phone: string;
    email: string;
  };
  fullName: string;
};

export const ProfileFieldList = ({ user, fullName }: ProfileFieldListProps) => {
  return (
    <Descriptions
      column={1}
      layout="horizontal"
      size="middle"
      className={styles.descriptions}
    >
      <Descriptions.Item label="ФИО">{fullName}</Descriptions.Item>
      <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
      <Descriptions.Item label="Телефон">
        {user.phone || 'Номер не указан'}
      </Descriptions.Item>
    </Descriptions>
  );
};
