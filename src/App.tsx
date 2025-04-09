import { ROUTES } from 'helpers/routes';
import { LoginPage, ProfilePage, PostsPage } from 'pages';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <Switch>
      <Route path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.PROFILE} component={ProfilePage} />
      <Route path={ROUTES.POSTS} component={PostsPage} />
    </Switch>
  );
};
