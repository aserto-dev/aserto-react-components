import React from 'react'
import { PrimaryButton, SecondaryButton, DangerButton, SecondaryBorderlessButton } from './styles'

type Modify<T, R> = Omit<T, keyof R> & R

type DefaultButtonProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    size?: string
    block?: boolean
  }
>

export interface ButtonProps extends DefaultButtonProps {
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
