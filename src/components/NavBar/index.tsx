import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from './aserto-horizontal-white-text.svg'
import separator from './separator.svg'
import { NavBarContainer, NavBarBrand, Separator } from './styles'
import { mapTestIdToProps } from '../../utils'

export type NavBarProps = {
  children: React.ReactElement
  showBrandSeparator?: boolean
  topPosition?: number
  expand?: 'sm' | 'md' | 'lg' | 'xl'
  expandBreakpoint?: number
  testId?: string
}

const expansionBreakpointsMap = {
  xl: 1200,
  lg: 991,
}

export const NavBar: React.FC<NavBarProps> = ({
  children,
  showBrandSeparator,
  topPosition,
  expand,
  expandBreakpoint,
  testId,
  ...props
}) => {
  return (
    <NavBarContainer
      $expandBreakpoint={expansionBreakpointsMap[expand] || expandBreakpoint}
      $topPosition={topPosition}
      {...props}
      {...mapTestIdToProps(testId)}
    >
      <Navbar className="navbar-dark" expand={expand || 'xl'} collapseOnSelect>
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
        {showBrandSeparator && (
          <Separator
            $hideBreakpoint={expansionBreakpointsMap[expand] || expandBreakpoint}
            src={separator}
          />
        )}
        <Navbar.Toggle />
        <Navbar.Collapse>{children}</Navbar.Collapse>
      </Navbar>
    </NavBarContainer>
  )
}
