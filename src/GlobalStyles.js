// src/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.6;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;
