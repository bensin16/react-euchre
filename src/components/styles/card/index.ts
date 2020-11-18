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
    margin: 20px;
    text-align: center;
    padding: 15px;
  `}
`;
