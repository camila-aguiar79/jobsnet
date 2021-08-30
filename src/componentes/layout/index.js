import React from 'react'
import Header from './header'
import Footer from './footer'
import Main from '../../App'

const Layout = (props) => {

    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    )

}

export default Layout
