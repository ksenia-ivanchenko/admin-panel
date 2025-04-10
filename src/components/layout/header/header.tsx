import { NavLink } from 'react-router-dom';
import { ROUTES } from 'helpers/routes';
import { Menu } from 'antd';

export const Header = () => {
  return (
    <header>
      <nav>
        <Menu mode="horizontal">
          <Menu.Item key="1">
            <NavLink to={ROUTES.POSTS.path}>{ROUTES.POSTS.name}</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to={ROUTES.PROFILE.path}>{ROUTES.PROFILE.name}</NavLink>
          </Menu.Item>
        </Menu>
      </nav>
    </header>
  );
};
