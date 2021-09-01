import styled from 'styled-components'

export const Main = styled.div`
    margin-top: 60px;
`
export const Title = styled.legend`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
`

export const Form = styled.form`
    text-align: center;
`

export const Fieldset = styled.fieldset`
    margin-top: 60px;
`

export const Field = styled.div`
    margin-bottom: 10px;
`

export const Label = styled.label`
    line-height: 25px;
    font-weight: 600;
`

export const FormInput = styled.input`
    width: 400px;
    padding: 10px 0;
    border: none;
    border-radius: 10px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
` 

export const Select = styled.select`
    width: 400px;
    padding: 10px 0;
    border: none;
    border-radius: 10px;
    text-align: center;

    option {
        font-size: 14px;
        font-weight: bold;
    }
    
`

export const Button = styled.button`
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 10px 25px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #99c1de; 
    font-size: 16px;
    font-weight: bold;

      :hover {
        background-color: #61a5c2;
    }
    `

