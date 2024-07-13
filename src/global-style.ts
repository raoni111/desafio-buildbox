import { createGlobalStyle } from "styled-components";
import { colors } from "./config/styles/consmetics";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }
    * { 
        margin: 0px;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: ${colors.bgColor};
    }
`;

export default GlobalStyle;