import React, { FC } from 'react';
import HeaderContent from './header-content';

import { Header } from './styles';

const PageHeader: FC = () => {
  return (
    <Header>
      <HeaderContent />
    </Header>
  );
};

export default PageHeader;
