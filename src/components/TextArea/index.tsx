import React from 'react'
import { FormControl, FormControlProps } from 'react-bootstrap'
import './TextArea.css'

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value: string | number
  onChange?: FormControlProps['onChange']
  style?: unknown
}

export const TextArea: React.FC<TextAreaProps> = ({ value, onChange, style, ...props }) => (
  <FormControl as="textarea" value={value} onChange={onChange} style={style} {...props} />
)
