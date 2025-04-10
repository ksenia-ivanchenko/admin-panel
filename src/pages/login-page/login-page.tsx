import { login } from 'api/requests/auth';
import { LoginForm } from 'components';
import { push } from 'connected-react-router';
import { ROUTES } from 'helpers/routes';
import { LoginData } from 'helpers/types';
import { useDispatch } from 'store';
import styles from './login-page.module.scss';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = async (credentials: LoginData) => {
    const { email, password } = credentials;

    await login({ email, password });
    dispatch(push(ROUTES.POSTS.path));
  };

  return (
    <div className={styles.page}>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
