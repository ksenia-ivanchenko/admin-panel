import { ProfileCard } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { getProfileRequest } from 'store/slices/profileSlice';
import styles from './profile-page.module.scss';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { data: user, error, loading } = useSelector((state) => state.profile);

  useEffect(() => {
    if (!user) {
      dispatch(getProfileRequest());
    }
  }, []);

  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;
  if (!user) return null;

  return (
    <div className={styles.page}>
      <ProfileCard user={user} />
    </div>
  );
};
