import React from 'react'
import { ButtonProps as BootstrapButtonProps } from 'react-bootstrap'
import { PrimaryButton, SecondaryButton, DangerButton } from './styles'

export interface ButtonProps extends BootstrapButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
}

const getButtonFromVariant = (variant: string) => {
  const variantObj = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    danger: DangerButton,
  }
  return variantObj[variant] || variantObj.primary
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const ButtonComponent = getButtonFromVariant(variant)

  return <ButtonComponent {...props} />
}
