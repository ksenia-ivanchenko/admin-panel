import { ROUTES } from 'helpers/routes';
import { PostsPage } from 'pages';
import { Redirect, Route, Switch } from 'react-router-dom';
import 'helpers/styles/normalize.css';
import { Layout } from 'components';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';

const LoginPage = lazy(() => import('pages/login-page/login-page'));
const ProfilePage = lazy(() => import('pages/profile-page/profile-page'));

export const App = () => {
  return (
    <Suspense
      fallback={
        <Spin tip="Загрузка..." size="large">
          <div />
        </Spin>
      }
    >
      <Switch>
        <Redirect exact from="/" to={ROUTES.POSTS.path} />
        <Route path={ROUTES.LOGIN.path} component={LoginPage} />
        <Route
          path={[ROUTES.PROFILE.path, ROUTES.POSTS.path]}
          render={() => (
            <Layout>
              <Switch>
                <Route path={ROUTES.PROFILE.path} component={ProfilePage} />
                <Route path={ROUTES.POSTS.path} component={PostsPage} />
              </Switch>
            </Layout>
          )}
        />
      </Switch>
    </Suspense>
  );
};
