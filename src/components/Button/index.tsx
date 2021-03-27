import React from 'react'
import { ButtonProps as BootstrapButtonProps } from 'react-bootstrap'
import { PrimaryButton, SecondaryButton, DangerButton, SecondaryBorderlessButton } from './styles'

export interface ButtonProps extends BootstrapButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'secondary-borderless'
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

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const ButtonComponent = getButtonFromVariant(variant)

  return <ButtonComponent {...props} />
}
