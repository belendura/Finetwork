import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');

html {
  overflow: scroll;
  height: 100%;
}

body {
  font-family:'Nunito Sans', sans-serif;
  margin: 0;
  height: 100%;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
