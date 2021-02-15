import React from 'react'
import { FormControl } from 'react-bootstrap'
import './Input.css'

const Input = ({placeholder, value, onChange, ...props}) => 
  <FormControl 
    placeholder={placeholder}
    value={value} 
    onChange={onChange} 
    {...props}
  />

  export default Input