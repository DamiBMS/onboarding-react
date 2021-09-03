import React from 'react'
import {  Link } from 'react-router-dom'
import { HeaderStyled, Nav, NavItem } from './styled'

export interface ItemsProps {
  name: string
  path: string
}

export interface Props {
  dataLinks: ItemsProps[]
}

export const Header = ({dataLinks}: Props) => {
  return (
    <HeaderStyled>
      <Nav>
        {dataLinks.map((linkItem) => (
          <NavItem>
              <Link to={linkItem.path}>
                {linkItem.name}
              </Link>
          </NavItem>
          )
        )}
      </Nav>
    </HeaderStyled>
  )
}