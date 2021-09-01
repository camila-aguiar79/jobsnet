import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    h1 {
        text-align: center;
        font-size: 30px;
    }

    #root {
        display: flex;
        flex-direction: column; 
        background-color: #d6e2e9;  
    }
`

export default GlobalStyle;
