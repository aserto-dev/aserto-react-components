import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { Label } from '../Label'

const RadioButton = styled.div<{ $selected?: boolean; $disabled?: boolean }>`
  width: 17px;
  min-width: 17px;
  display: flex;
  height: 17px;
  min-height: 17px;
  border-radius: 20px;
  stroke-width: 1;
  ${({ $disabled }) => {
    return $disabled
      ? css`
          background-color: ${theme.grey10};
          border: 1px solid ${theme.grey30};
        `
      : ''
  }}
  ${({ $selected, $disabled }) => {
    const color = $disabled ? theme.lochivar30 : theme.lochivar100
    return $selected
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
const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const RadioRow = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ disabled }) => {
    return disabled ? 'pointer-events: none' : ''
  }};
  label {
    margin-right: 20px;
    cursor: pointer;
    margin-left: 10px;
    margin-bottom: 0px;
    color: ${theme.grey100};
    font-size: 12px;
  }
  &:last-child {
    //gap: 20px;
    label {
      margin-right: auto;
    }
  }
`

interface Option {
  value: string
  label: string
  disabled?: boolean
}

export type RadioButtonGroupProps = {
  options: Array<Option>
  onChange: (val: string) => void
  defaultSelected?: string
  label?: string
  value?: string
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  onChange,
  defaultSelected,
  label,
  value,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultSelected || '')

  const onChangeOption = (val: string) => {
    setSelectedOption(val)
  }

  useEffect(() => {
    if (selectedOption) {
      onChange(selectedOption)
    }
  }, [selectedOption])

  useEffect(() => {
    if (value) {
      setSelectedOption(value)
    }
  }, [value])

  return (
    <>
      {label && <Label>{label}</Label>}
      <RadioGroupContainer>
        {options.map((option) => {
          return (
            <RadioRow
              disabled={option.disabled}
              key={option.value}
              onClick={() => onChangeOption(option.value)}
            >
              <RadioButton
                $disabled={option.disabled}
                $selected={selectedOption === option.value}
              />
              <label>{option.label}</label>
            </RadioRow>
          )
        })}
      </RadioGroupContainer>
    </>
  )
}
