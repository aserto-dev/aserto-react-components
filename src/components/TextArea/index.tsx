import React from 'react'
import { FormControl, FormControlProps } from 'react-bootstrap'
import './TextArea.css'

export type TextAreaProps = {
  value: string | number
  onChange: FormControlProps['onChange']
  rows?: number
  placeholder?: string
  style?: unknown
}

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  onChange,
  rows,
  style,
  ...props
}) => (
  <FormControl
    as="textarea"
    rows={rows}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={style}
    {...props}
  />
)
