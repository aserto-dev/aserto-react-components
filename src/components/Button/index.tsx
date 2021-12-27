import React from 'react'
import { ButtonProps as BootstrapButtonProps } from 'react-bootstrap'
import { PrimaryButton, SecondaryButton, DangerButton, SecondaryBorderlessButton } from './styles'

export type DisplayState = {
  visible?: boolean
  enabled?: boolean
}

export interface ButtonProps extends BootstrapButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'secondary-borderless'
  displayState?: DisplayState
}

const getButtonFromVariant = (variant: string) => {
  const variantObj = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    danger: DangerButton,
    'secondary-borderless': SecondaryBorderlessButton,
  }
  return variantObj[variant] || variantObj.primary
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', displayState, ...props }, ref) => {
    const ButtonComponent = getButtonFromVariant(variant)
    if (!displayState) {
      return <ButtonComponent ref={ref} {...props} />
    }
    if (displayState.visible) {
      if (displayState.enabled) {
        return <ButtonComponent ref={ref} {...props} />
      }
      return <ButtonComponent ref={ref} disabled {...props} />
    }
  }
)
