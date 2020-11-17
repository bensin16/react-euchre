import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  max-height: fit-content;
`;

export const LayoutDiv = styled.div`
  width: 100%;
  margin: 10px 50px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    margin-top: 0;
  `}
`;
