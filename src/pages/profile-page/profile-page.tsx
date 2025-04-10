import { ProfileCard } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { getProfileRequest } from 'store/slices/profileSlice';
import styles from './profile-page.module.scss';
import { Skeleton } from 'antd';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { data: user, error, loading } = useSelector((state) => state.profile);

  useEffect(() => {
    if (!user) {
      dispatch(getProfileRequest());
    }
  }, []);

  if (loading || !user)
    return (
      <div className={styles.page}>
        <div className={styles.skeletonProfileCard}>
          <Skeleton active paragraph={{ rows: 4 }} />
        </div>
      </div>
    );
  if (error)
    return <div className={styles.page}>Произошла ошибка: {error} </div>;

  return (
    <div className={styles.page}>
      <ProfileCard user={user} />
    </div>
  );
};
