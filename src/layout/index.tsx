import React, { FC } from 'react';

import { HeaderContent, FooterContent } from 'components';

import { Content, Header, LayoutDiv, Footer } from './styles';

const Layout: FC = ({ children }) => {
  return (
    <LayoutDiv>
      <Header>
        <HeaderContent />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <FooterContent />
      </Footer>
    </LayoutDiv>
  );
};

export default Layout;
