import React from 'react'
import { FormControl } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../theme'
import valid from './valid.svg'
import invalid from './invalid.svg'
import unavaliable from './unavailable.svg'
import { Label } from '../Label'
import { mapTestIdToProps } from '../../utils'

export type InputProps = {
  placeholder?: string
  value?: string | number
  onChange?: (e: any) => void
  label?: string
  info?: string
  error?: string
  isValid?: boolean
  isUnavailable?: boolean
  disabled?: boolean
  type?: 'text' | 'number' | 'password' | 'email' | string | null
  style?: any
  hasSmallLabel?: boolean
  autoComplete?: string
  block?: boolean
  defaultValue?: string | number
}

const getInputValueForState = (isValid: boolean, isInvalid: boolean, isUnavailable: boolean) => {
  if (isValid) {
    return `border-color: ${theme.lochivarAccent2} !important;background-image: url("${valid}") !important; background-size: calc(4.2em + 0.375rem) calc(1em + 0.375rem) !important;`
  } else if (isUnavailable) {
    return `border-color: ${theme.mojoAccent3} !important;background-image: url("${unavaliable}") !important; background-size: calc(5.2em + 0.375rem) calc(1em + 0.375rem) !important;`
  } else if (isInvalid) {
    return `border-color: ${theme.mojoAccent3} !important;background-image: url("${invalid}") !important; background-size: calc(3em + 0.375rem) calc(1em + 0.375rem) !important;`
  }
  return `border-color: #595959;`
}

const AsertoInput = styled(FormControl)<{
  isValid?: boolean
  isInvalid?: boolean
  $isUnavailable?: boolean
  $block?: boolean
}>`
  background-color: ${theme.primaryBlack};
  color: ${theme.grey100};
  border-color: ${theme.grey40};
  &:focus {
    background-color: ${theme.primaryBlack};
    color: ${theme.grey100};
    outline: none;
    box-shadow: none;
    border-color: ${theme.lochivarAccent2};
    -webkit-box-shadow: none;
  }
  &:disabled {
    color: ${theme.grey40};
    background-color: ${theme.grey20};
    opacity: 0.6;
  }
  ${({ isValid, isInvalid, $isUnavailable }) =>
    getInputValueForState(isValid, isInvalid, $isUnavailable)};
`

const InputContainer = styled.div<{ $block?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ $block }) => ($block ? 'width: 100%' : '')};
`

const Info = styled.div`
  font-size: 14px;
  color: ${theme.grey70};
  margin-top: 8px;
  @media (max-width: 720px) {
    max-width: 270px;
  }
`

const Error = styled(Info)`
  color: ${theme.mojoAccent3};
`

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<any, InputProps>(
  (
    {
      placeholder,
      value,
      onChange,
      label,
      info,
      error,
      isValid,
      isUnavailable,
      type,
      style,
      hasSmallLabel,
      block,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const shouldDisplayInfo = !error && info
    const testId = props['data-testid']
    return (
      <InputContainer $block={block}>
        {label && <Label $small={hasSmallLabel}>{label}</Label>}
        <AsertoInput
          ref={ref}
          isValid={isValid}
          isInvalid={error}
          $isUnavailable={isUnavailable}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange ? onChange : () => null}
          style={style}
          defaultValue={defaultValue}
          {...props}
        />
        {shouldDisplayInfo && <Info {...mapTestIdToProps(`${testId}-info`)}>{info}</Info>}
        {error && <Error {...mapTestIdToProps(`${testId}-error`)}>{error}</Error>}
      </InputContainer>
    )
  }
)
