import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    h1 {
        text-align: center;
        font-size: 30px;
    }

    #root {
        display: flex;
        flex-direction: column; 
        background-color: #ddbea9;  
    }
`

export default GlobalStyle;
