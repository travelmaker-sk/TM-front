import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import palette from "./palette";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body{
    font-family: 'Noto Sans KR', sans-serif;
    color: ${palette.gray[9]};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    font-family: 'Noto Sans KR', sans-serif;
    color: ${palette.gray[9]};
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
