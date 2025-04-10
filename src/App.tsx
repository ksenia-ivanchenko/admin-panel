import { ROUTES } from 'helpers/routes';
import { LoginPage, ProfilePage, PostsPage } from 'pages';
import { Route, Switch } from 'react-router-dom';
import 'helpers/styles/normalize.css';
import { Layout } from 'components';

export const App = () => {
  return (
    <Switch>
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
  );
};
