import styled from "styled-components";

export const Button = styled.button `

    width:141px;
    height:40px;
    background-color: ${props => props.theme.colors.secondaryDefault};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.xs};
    text-transform:uppercase;
    border-radius:50px;
    cursor:pointer;
    border:none;
    &:hover {
        background-color: ${props => props.theme.colors.primaryDefault} ;
        transition: .3s;
    }
`

export const Wrapper = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top: ${props => props.theme.space.m};
    width:400px;
    height:100px;
    background-color: ${props => props.theme.colors.primaryDefault};
    position:relative;
    border-radius:10px;
    box-shadow: 0px 0px 10px;

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