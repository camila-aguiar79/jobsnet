import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './componentes/layout'
import GlobalStyle from './assets/globalStyled'
import './assets/img/contact_page.svg'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

