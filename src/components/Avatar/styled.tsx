import styled from "styled-components";

export const AvatarWrap = styled.div `
    display: flex;
    justify-content:space-between;
    max-width: 350px;
`
export const AvatarImg = styled.img `
    border: 2px solid black;
    border-radius: 50px;
    width:100px;
    height:100px;
    object-fit:cover;
`
export const AvatarName = styled.h3 `
    font-size: 20px;
    align-self:center;
`
export const AvatarLetter = styled.span `
    border: 2px solid black;
    border-radius: 50px;
    width:100px;
    height:100px;
    background-color:beige;
    color:red;
    font-size: 80px;
    font-weight:bold;
    text-align:center;
    padding-top:2px;
    padding-left:3px;
`



