import React from 'react';
import { HeaderDesktop } from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import useWindowSize from '../../hooks/useWindowSize';
import endpoints from '../../Router/endpoints';

const Header = () => {
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

  return isMobile ? <HeaderMobile options={navigationOptions} /> : <HeaderDesktop options={navigationOptions} />;
};

export default Header;
