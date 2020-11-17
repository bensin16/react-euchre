import React, { FC } from 'react';

import { LogoImg } from '../styles';

import LogoFile from './img/test_logo.png';

const HeaderContent: FC = () => {
  return <LogoImg src={LogoFile} alt="testlogo" />;
};

export default HeaderContent;
