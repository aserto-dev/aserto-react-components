import React, { useCallback } from 'react'
import { Dropdown } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../theme'

const StyledMenu = styled(Dropdown.Menu)`
  width: 250px;
  border-radius: 0;
  padding: 0;
  border: 1px solid ${theme.grey50};
  background-color: ${theme.grey20};
  font-size: 14px;
`

const StyledItem = styled(Dropdown.Item)`
  width: 100%;
  height: 36px;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: ${theme.grey70};
  text-align: left;

  &:hover:not(:disabled),
  &:focus {
    background-color: ${theme.grey40};
    color: ${theme.grey100};
  }

  &:disabled {
    background-color: ${theme.grey20};
  }
`

const StyledDivider = styled(Dropdown.Divider)`
  margin: 0;
  border-color: ${theme.grey50};
`

interface PopoverMenuContainerProps {
  onSelect?: (name: string) => void
  children: React.ReactNode
}

const PopoverMenuContainer = ({ onSelect: onSelectProp, children }: PopoverMenuContainerProps) => {
  const onSelect = useCallback(
    (name: string) => {
      // Dispatch asynchronously so that the menu has enough time to close,
      setTimeout(() => onSelectProp?.(name), 0)
    },
    [onSelectProp]
  )
  return (
    <Dropdown drop="right" onSelect={onSelect as (name: string | null) => void}>
      {children}
    </Dropdown>
  )
}

interface PopoverMenuProps {
  children: React.ReactNode
}

interface PopoverMenuTriggerProps {
  children: React.ReactElement
}

const PopoverMenuTrigger = ({ children }: PopoverMenuTriggerProps) => {
  return (
    <Dropdown.Toggle bsPrefix="p-6" as={children.type} key={children.key} {...children.props} />
  )
}

interface PopoverMenuItemProps {
  children: React.ReactNode
  name: string
}

const PopoverMenuItem = ({ name, children }: PopoverMenuItemProps) => {
  return <StyledItem eventKey={name}>{children}</StyledItem>
}

const PopoverMenuDivider = () => <StyledDivider />

export const PopoverMenu = Object.assign(
  ({ children }: PopoverMenuProps) => {
    return <StyledMenu>{children}</StyledMenu>
  },
  {
    Container: PopoverMenuContainer,
    Trigger: PopoverMenuTrigger,
    Item: PopoverMenuItem,
    Divider: PopoverMenuDivider,
  }
)
