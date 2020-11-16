import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    align-items: stretch;
    background-color: ${theme.colors.white};
    border-radius: 15px;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    max-height: fit-content;
    margin: 20px;
    padding: 15px;
  `}
`;
