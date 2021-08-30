import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <SFooter>
            <div>&copy; Copyright 2021 - JobsNET</div> 
        </SFooter>
        
    )
}

export default Footer


export const SFooter = styled.footer`
    background-color: #bcd4e6;
    padding: 5px 0;
    height: 15px;
    width: 100vw;
    border: none;
    box-shadow: 0 0 20px 0 #99c1de;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
`