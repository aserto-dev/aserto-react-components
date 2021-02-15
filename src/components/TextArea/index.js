import React from 'react'
import { FormControl } from 'react-bootstrap'
import './TextArea.css'

const TextArea = ({placeholder, value, onChange, rows, ...props}) => 
  <FormControl 
    as='textarea'
    rows={rows}
    placeholder={placeholder}
    value={value} 
    onChange={onChange} 
    {...props}
  />

  export default TextArea