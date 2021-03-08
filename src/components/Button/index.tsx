import React from 'react'
import { Button as BootstrapButton, ButtonProps as BootstrapButtonProps } from 'react-bootstrap'
import './Button.css'

export type ButtonProps = BootstrapButtonProps

export const Button: React.FC<BootstrapButtonProps> = ({...props}) =>
  <BootstrapButton className='aserto-button btn-secondary' { ...props } />

