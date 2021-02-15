import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'
import './Button.css'

const Button = ({...props}) => 
  <BootstrapButton className='aserto-button btn-secondary' { ...props } />

export default Button
