import styled from "styled-components";

export const AvatarWrap = styled.div `
    display: flex;
    justify-content:flex-start;
    max-width: 300px;
    
`
export const AvatarImg = styled.img `
    border-radius: 50px;
    width:40px;
    height:40px;
    object-fit:cover;
   
`
export const AvatarName = styled.h3 `
    font-size: ${props => props.theme.fontSizes.xl};
    margin-left: ${props => props.theme.space.s};
    align-self: center;
`
export const AvatarLetter = styled.span `
    border: 2px solid black;
    border-radius: 50px;
    width:40px;
    height:40px;
    background-color:beige;
    color:red;
    font-size: 80px;
    font-weight:bold;
    text-align:center;
    padding-top:2px;
    padding-left:3px;
`



