import React, { FC } from 'react';

import { HeaderContent, FooterContent } from 'components';

import { Content, Header, Footer } from './styles';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header>
        <HeaderContent />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <FooterContent />
      </Footer>
    </div>
  );
};

export default Layout;
