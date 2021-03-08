import React from 'react'
import { FormControl } from 'react-bootstrap'
import './Input.css'

export type InputProps = {
  placeholder?: string
  value: string | number
  onChange: (e: any) => void
}

export const Input: React.FC<InputProps> = ({ placeholder, value, onChange, ...props }) => (
  <FormControl placeholder={placeholder} value={value} onChange={onChange} {...props} />
)
