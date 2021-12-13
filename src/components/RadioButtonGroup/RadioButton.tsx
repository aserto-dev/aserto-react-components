import { theme } from '../../theme'
import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { RadioButtonGroupContext } from './EmptyRadioButtonGroup'

interface RadioButtonProps {
  disabled?: boolean
  value: string
}

const RadioButtonVisual = styled.div<{ 'aria-checked'?: boolean; 'aria-disabled'?: boolean }>`
  width: 17px;
  min-width: 17px;
  display: flex;
  height: 17px;
  min-height: 17px;
  border-radius: 20px;
  stroke-width: 1;
  ${({ 'aria-disabled': disabled }) => {
    return disabled
      ? css`
          background-color: ${theme.grey10};
          border: 1px solid ${theme.grey30};
        `
      : ''
  }}
  ${({ 'aria-checked': selected, 'aria-disabled': disabled }) => {
    const color = disabled ? theme.lochivar30 : theme.lochivar100
    return selected
      ? css`
          border: 1px solid ${color};
          &:after {
            background: ${color};
            width: 11px;
            height: 11px;
            display: flex;
            margin: auto;
            border-radius: 10px;
            content: '';
          }
        `
      : `border: 1px solid ${theme.grey50};`
  }}
`

const RadioButton: React.FC<
  Omit<
    React.ComponentPropsWithoutRef<'div'>,
    'aria-disabled' | 'aria-checked' | 'onClick' | 'role'
  > &
    RadioButtonProps
> = ({ disabled, tabIndex: tabIndexOverride, value, ...rest }) => {
  const { onSelectValue, selectedValue } = useContext(RadioButtonGroupContext)

  return (
    <RadioButtonVisual
      {...rest}
      aria-disabled={disabled}
      aria-checked={value === selectedValue}
      onClick={() => value !== selectedValue && onSelectValue(value)}
      role="radio"
      {...(!disabled && { tabIndex: tabIndexOverride ?? 0 })}
    />
  )
}

export default RadioButton
