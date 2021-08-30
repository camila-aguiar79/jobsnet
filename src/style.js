import styled from 'styled-components'

export const Main = styled.div`
    background-color: #caacf6;
    width: 100vw;
    height: 100vh;
`

export const Title = styled.h1`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center; 
`

export const Form = styled.form`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`

export const FormInput = styled.input`
    width: 400px;
    border: none;
    border-radius: 10px;
` 

export const Button = styled.button`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: 680px;
    margin-top: 40px;
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`


// const ErrorSpan = styled.span`
//   color: red;
//   display: ${(props) => props.isError ? 'block' : 'none'};
// `