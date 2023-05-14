import React from 'react';
import { useNavigate } from 'react-router';
import { HeaderDesktop } from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import useWindowSize from '../../hooks/useWindowSize';
import endpoints from '../../Router/endpoints';

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useWindowSize();

  const navigationOptions = [
    {
      id: 1,
      text: 'Всі солдати',
      path: endpoints.soldiers,
    },
    {
      id: 2,
      text: 'Мій фідбек',
      path: endpoints.feedback,
    },
  ];

  const handleLogout = () => {
    // make api requrest
    navigate(endpoints.login);
  };

  return isMobile ? (
    <HeaderMobile options={navigationOptions} handleLogout={handleLogout} />
  ) : (
    <HeaderDesktop options={navigationOptions} handleLogout={handleLogout} />
  );
};

export default Header;
