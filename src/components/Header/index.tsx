import React from 'react'
import {  Link } from 'react-router-dom'
import { HeaderStyled, Nav, NavItem, Logo} from './styled'

import MsSvg from '../../Green-color.svg'

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
      <Logo src={MsSvg} alt='Logo MS'/>
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