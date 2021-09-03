import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 2rem 7.5rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
`

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`

export const NavItem = styled.p`
  color: forestgreen;
  text-transform: uppercase;
  font-size: 12px;

  &&:hover {
    text-decoration: underline;
  }
`