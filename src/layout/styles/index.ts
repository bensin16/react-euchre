import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  max-height: fit-content;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    margin-top: 0;
  `}
`;
