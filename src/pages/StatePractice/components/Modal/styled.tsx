import styled from "styled-components";

export const Button = styled.button `

    padding: 1em 2em;
    background-color: red;
    color:white;
    font-size: 18px;
    text-transform:uppercase;
    border-radius:50px;
    cursor:pointer;


`

export const Wrapper = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top: 20px;
    width:400px;
    height:100px;
    background-color:#f1e8e8;
    position:relative;
    border-radius:10px;

`



export const CloseButton = styled.button `

    cursor:pointer;
    border:none;
    position:absolute;
    top:5px;
    right:5px;
    background-color:transparent;

`
export const Text = styled.p `

    text-align:center;

`