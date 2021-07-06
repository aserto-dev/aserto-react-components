import React, { useRef, useState } from 'react'
import logo from './aserto-horizontal-white-text.svg'
import separator from './separator.svg'
import {
  NavBarBrand,
  NavbarCollapse,
  NavBarContainer,
  NavbarText,
  NavbarToggle,
  NavItem,
  DropdownNavItem,
  NavMobile,
  Separator,
  NavItemDropdownMobile,
  MobileMenu,
  FatherLink,
} from './styles'
import { mapTestIdToProps } from '../../utils'
import { NavBarUserDropdown } from '../../NavBarUserDropdown'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import './style.css'

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

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((state) => !state)

  return { isOpen, open, close, toggle }
}

export const NavItemWithDropdown = ({ link, id }) => {
  const { isOpen, open, close, toggle } = useDropdown()
  const [focusOnClose, setFocusOnClose] = useState(true)
  const triggerRef = useRef(null)

  React.useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const { clientX, clientY } = e
      const elementMouseIsOver = document.elementFromPoint(clientX, clientY)
      if (!elementMouseIsOver) {
        setFocusOnClose(false)
        return close()
      }
      const isHoveringDropdown =
        elementMouseIsOver.closest(`[data-radix-popper-content-wrapper]`) !== null
      const isHoveringContainer =
        elementMouseIsOver === triggerRef.current ||
        elementMouseIsOver.closest(`[data-id="${id}"]`) !== null

      if (!isHoveringContainer && !isHoveringDropdown) {
        setFocusOnClose(false)
        return close()
      }
    }

    if (isOpen) {
      document.addEventListener('mousemove', handleMouseMove)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    } else {
      setFocusOnClose(true)
    }
  }, [isOpen, close, id])

  const trigger = (
    <DropdownMenu.Trigger
      onMouseEnter={open}
      ref={triggerRef}
      data-id={id}
      tabIndex={0}
      as={NavItem}
    >
      <>
        <a>{link.label}</a>
      </>
    </DropdownMenu.Trigger>
  )

  return (
    <DropdownMenu.Root open={link?.items?.length ? isOpen : false} onOpenChange={toggle}>
      <FatherLink href={link.href} hasItems={link?.items?.length > 0}>
        {trigger}
      </FatherLink>
      <MobileMenu>
        {link?.items?.length &&
          link.items.map((item) => {
            return (
              <NavItemDropdownMobile
                style={{
                  marginLeft: 10,
                }}
                key={item.label}
              >
                <a>{item.label}</a>
              </NavItemDropdownMobile>
            )
          })}
      </MobileMenu>

      <DropdownMenu.Content
        onCloseAutoFocus={(e: any) => {
          if (!focusOnClose) {
            e.preventDefault()
          }
        }}
        sideOffset={-20}
        disableOutsidePointerEvents={false}
        as="ul"
        className="menu-content"
      >
        {link?.items?.map((l, i) => (
          <DropdownNavItem key={i}>
            <DropdownMenu.Item
              href={l.href}
              as="a"
              onSelect={() => {
                window.open(l?.href, '_blank')
              }}
            >
              {l?.label}
            </DropdownMenu.Item>
          </DropdownNavItem>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
