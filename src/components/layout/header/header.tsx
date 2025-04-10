import { NavLink } from 'react-router-dom';
import { ROUTES } from 'helpers/routes';
import { Menu } from 'antd';

export const Header = () => {
  const items = [
    {
      key: '1',
      label: <NavLink to={ROUTES.POSTS.path}>{ROUTES.POSTS.name}</NavLink>,
    },
    {
      key: '2',
      label: <NavLink to={ROUTES.PROFILE.path}>{ROUTES.PROFILE.name}</NavLink>,
    },
  ];

  return (
    <header>
      <nav>
        <Menu mode="horizontal" items={items} />
      </nav>
    </header>
  );
};
