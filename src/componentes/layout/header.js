import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <SHeader>
            <h1>JobsNET - Banco de Currículos</h1>
        </SHeader>
        
    )
}

export default Header


export const SHeader = styled.header`
    background-color: #cb997e;
    padding: 15px 0;
    position: fixed;
    height: 30px;
    width: 100vw;
    border: none;
    box-shadow: 0 0 20px 0 #b98b73;
`