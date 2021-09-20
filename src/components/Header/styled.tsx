import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  height:60px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
`

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding-top: ${props => props.theme.space.xs};
  padding-left: ${props => props.theme.space.l};
  padding-right: ${props => props.theme.space.l};
`

export const NavItem = styled.p`
  color: forestgreen;
  font-size: ${props => props.theme.fontSizes.sm};
  &&:hover {
    text-decoration: underline;
  }
`

export const Logo = styled.img `
  
  margin-right: auto;

`