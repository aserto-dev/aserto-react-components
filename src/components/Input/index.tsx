import React from 'react'
import { FormControl } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../theme'
import valid from './valid.svg'
import invalid from './invalid.svg'
import unavaliable from './unavailable.svg'

export type InputProps = {
  placeholder?: string
  value: string | number
  onChange: (e: any) => void
  label?: string
  info?: string
  error?: string
  isValid?: boolean
  isUnavailable?: boolean
}

const getInputValueForState = (isValid: boolean, isInvalid: boolean, isUnavailable: boolean) => {
  if (isValid) {
    return `border-color: ${theme.lochivarAccent2} !important;background-image: url("${valid}") !important; background-size: calc(4.2em + 0.375rem) calc(1em + 0.375rem) !important;`
  } else if (isUnavailable) {
    return `border-color: ${theme.mojoAccent3} !important;background-image: url("${unavaliable}") !important; background-size: calc(5.2em + 0.375rem) calc(1em + 0.375rem) !important;`
  } else if (isInvalid) {
    return `border-color: ${theme.mojoAccent3} !important;background-image: url("${invalid}") !important; background-size: calc(3em + 0.375rem) calc(1em + 0.375rem) !important;`
  }
  return `border-color: #403f3f;`
}

const AsertoInput = styled(FormControl)<{
  isValid?: boolean
  isInvalid?: boolean
  isUnavailable?: boolean
}>`
  background-color: #161719;
  color: #d7d8d8;
  &:focus {
    background-color: #161719;
    color: #d7d8d8;
    outline: none;
    border-color: #7d7a7a;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  ${({ isValid, isInvalid, isUnavailable }) =>
    getInputValueForState(isValid, isInvalid, isUnavailable)};
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
  color: ${theme.grey100};
`

const Info = styled.div`
  font-size: 14px;
  color: ${theme.grey70};
  margin-top: 8px;
  margin-bottom: 20px;
`

const Error = styled(Info)`
  color: ${theme.mojoAccent3};
`

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  label,
  info,
  error,
  isValid,
  isUnavailable,
  ...props
}) => {
  const shouldDisplayInfo = !error && info
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <AsertoInput
        isValid={isValid}
        isInvalid={error}
        isUnavailable={isUnavailable}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {shouldDisplayInfo ? <Info>{info}</Info> : <Error>{error}</Error>}
    </InputContainer>
  )
}
