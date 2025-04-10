import { NavLink } from 'react-router-dom';
import { ROUTES } from 'helpers/routes';
import { Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { logoutApi } from 'api/requests/auth';
import { useDispatch } from 'store';
import { push } from 'connected-react-router';

export const Header = () => {
  const dispatch = useDispatch();

  const logout = () => {
    logoutApi();
    dispatch(push(ROUTES.LOGIN.path));
  };

  const items = [
    {
      key: '1',
      label: <NavLink to={ROUTES.POSTS.path}>{ROUTES.POSTS.name}</NavLink>,
    },
    {
      key: '2',
      label: <NavLink to={ROUTES.PROFILE.path}>{ROUTES.PROFILE.name}</NavLink>,
    },
    {
      key: '3',
      label: <LogoutOutlined onClick={logout} />,
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
