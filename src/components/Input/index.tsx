import React from 'react'
import { FormControl } from 'react-bootstrap'
import styled from 'styled-components'

export type InputProps = {
  placeholder?: string
  value: string | number
  onChange: (e: any) => void
}

const InputContainer = styled(FormControl)`
  background-color: #161719;
  color: #d7d8d8;
  border-color: #403f3f;
  &:focus {
    background-color: #161719;
    color: #d7d8d8;
    outline: none;
    border-color: #7d7a7a;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`

export const Input: React.FC<InputProps> = ({ placeholder, value, onChange, ...props }) => (
  <InputContainer placeholder={placeholder} value={value} onChange={onChange} {...props} />
)
