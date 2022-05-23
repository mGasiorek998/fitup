import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    background-color: ${({ theme }) => theme.colors.lightGray}
  }
`;

export default GlobalStyles;
