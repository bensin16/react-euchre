import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    align-items: stretch;
    background-color: ${theme.colors.white};
    border-radius: 15px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    max-height: fit-content;
    padding: 15px;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  max-height: fit-content;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    margin-top: 0;
  `}
`;
