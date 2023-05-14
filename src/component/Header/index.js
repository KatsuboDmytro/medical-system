import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { HeaderDesktop } from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import useWindowSize from '../../hooks/useWindowSize';
import endpoints from '../../Router/endpoints';

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useWindowSize();

  const doctor = useSelector(state => state.auth.doctor);

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

  const displayName = `${doctor.surname} ${doctor.name}`;

  return isMobile ? (
    <HeaderMobile displayName={displayName} options={navigationOptions} handleLogout={handleLogout} />
  ) : (
    <HeaderDesktop displayName={displayName} options={navigationOptions} handleLogout={handleLogout} />
  );
};

export default Header;
