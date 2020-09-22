import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
    background:${(p) => p.theme.colors.gray};
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
