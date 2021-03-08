import React from 'react'
import { FormControl } from 'react-bootstrap'
import './TextArea.css'

export type TextAreaProps = {
  placeholder: string
  value: string | number
  onChange: () => void
  rows: number
}

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  onChange,
  rows,
  ...props
}) => (
  <FormControl
    as="textarea"
    rows={rows}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    {...props}
  />
)
