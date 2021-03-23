import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from './aserto-horizontal-white-text.svg'
import separator from './separator.svg'
import { NavBarContainer, NavBarBrand, Separator } from './styles'

export type NavBarProps = {
  children: React.ReactElement
  showBrandSeparator?: boolean
  topPosition?: number
}

export const NavBar = ({ children, showBrandSeparator, topPosition, ...props }) => {
  return (
    <NavBarContainer $topPosition={topPosition} {...props}>
      <Navbar className="navbar-dark" expand="xl" collapseOnSelect>
        <NavBarBrand>
          <img
            src={logo}
            width="131"
            height="48"
            style={{ marginLeft: 10 }}
            className="d-inline-block align-center"
            alt="logo"
          />
        </NavBarBrand>
        {showBrandSeparator && <Separator src={separator} />}
        <Navbar.Toggle />
        <Navbar.Collapse>{children}</Navbar.Collapse>
      </Navbar>
    </NavBarContainer>
  )
}
