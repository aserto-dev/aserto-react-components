import React from 'react'
import logo from './aserto-horizontal-white-text.svg'
import separator from './separator.svg'
import {
  NavBarContainer,
  NavBarBrand,
  Separator,
  NavbarText,
  NavbarCollapse,
  NavbarToggle,
  NavMobile,
} from './styles'
import { mapTestIdToProps } from '../../utils'
import { NavBarUserDropdown } from '../../NavBarUserDropdown'
import { useState } from 'react'

export type NavBarProps = {
  children: React.ReactElement
  uncollapsableContent?: React.ReactElement | string
  showBrandSeparator?: boolean
  topPosition?: number
  expand?: 'sm' | 'md' | 'lg' | 'xl'
  expandBreakpoint?: number
  user?: any
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
  uncollapsableContent,
  user,
  ...props
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <NavBarContainer
      $showMobileMenu={showMobileMenu}
      $expandBreakpoint={expansionBreakpointsMap[expand] || expandBreakpoint}
      $topPosition={topPosition}
      {...props}
      {...mapTestIdToProps(testId)}
    >
      <nav className="navbar-dark">
        <NavBarBrand $expandBreakpoint={expansionBreakpointsMap[expand] || expandBreakpoint}>
          <img
            src={logo}
            width="131"
            height="48"
            style={{ marginLeft: 10 }}
            className="d-inline-block align-center"
            alt="logo"
          />
        </NavBarBrand>
        {uncollapsableContent && <NavbarText>{uncollapsableContent}</NavbarText>}
        {showBrandSeparator && (
          <Separator
            $hideBreakpoint={expansionBreakpointsMap[expand] || expandBreakpoint}
            src={separator}
          />
        )}
        <NavbarCollapse>{children}</NavbarCollapse>
        <NavbarToggle onClick={() => setShowMobileMenu((s) => !s)}>
          <span />
        </NavbarToggle>
        {user && <NavBarUserDropdown />}
      </nav>
      <NavMobile show={showMobileMenu}>{children}</NavMobile>
    </NavBarContainer>
  )
}
