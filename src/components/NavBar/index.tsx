import React from 'react'
import { Navbar } from 'react-bootstrap'
import AsertoLogo from './aserto-horizontal-white-text.svg'
import separator from './separator.svg'
import { DEFAULT_EXPANSION_BREAKPOINT, NavBarContainer, NavBarBrand, Separator } from './styles'
import { mapTestIdToProps } from '../../utils'

export { DEFAULT_EXPANSION_BREAKPOINT, NavBarPixelHeight } from './styles'

export type NavBarProps = {
  children?: React.ReactNode
  logo?: React.ReactNode
  uncollapsableContent?: React.ReactNode
  showBrandSeparator?: boolean
  topPosition?: number
  expand?: 'sm' | 'md' | 'lg' | 'xl'
  expandBreakpoint?: number
  testId?: string
}

const expansionBreakpointsMap = {
  xl: DEFAULT_EXPANSION_BREAKPOINT,
  lg: 991,
}

const DEFAULT_LOGO = <img src={AsertoLogo} alt="logo" />

export const NavBar: React.FC<NavBarProps> = ({
  children,
  logo = DEFAULT_LOGO,
  showBrandSeparator,
  topPosition,
  expand,
  expandBreakpoint,
  testId,
  uncollapsableContent,
  ...props
}) => {
  return (
    <NavBarContainer
      $expandBreakpoint={expansionBreakpointsMap[expand] ?? expandBreakpoint}
      $topPosition={topPosition}
      {...props}
      {...mapTestIdToProps(testId)}
    >
      <Navbar className="navbar-dark" expand={expand ?? 'xl'} collapseOnSelect>
        <NavBarBrand>{logo}</NavBarBrand>
        {uncollapsableContent && <Navbar.Text>{uncollapsableContent}</Navbar.Text>}
        {showBrandSeparator && (
          <Separator
            $hideBreakpoint={expansionBreakpointsMap[expand] ?? expandBreakpoint}
            src={separator}
          />
        )}
        {children && (
          <>
            <Navbar.Toggle />
            <Navbar.Collapse>{children}</Navbar.Collapse>
          </>
        )}
      </Navbar>
    </NavBarContainer>
  )
}
