import React, { FC } from 'react';

import { PageHeader, PageFooter } from 'components';

import { Content, LayoutDiv } from './styles';

const Layout: FC = ({ children }) => {
  return (
    <LayoutDiv>
      <PageHeader />
      <Content>{children}</Content>
      <PageFooter />
    </LayoutDiv>
  );
};

export default Layout;
