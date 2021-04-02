import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { Label } from '../Label'

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const RadioButton = styled.div<{ $selected?: boolean }>`
  width: 17px;
  min-width: 17px;
  display: flex;
  height: 17px;
  min-height: 17px;
  border-radius: 20px;
  stroke-width: 1;
  ${({ $selected }) => {
    return $selected
      ? css`
          border: 1px solid ${theme.lochivar100};
          &:after {
            background: ${theme.lochivar100};
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

const RadioRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  label {
    cursor: pointer;
    margin-left: 10px;
    margin-bottom: 0px;
    color: ${theme.grey100};
    font-size: 12px;
  }
`

interface Option {
  value: string
  label: string
}

export type RadioButtonGroupProps = {
  options: Array<Option>
  onChange: (val: string) => void
  defaultSelected?: string
  label?: string
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  onChange,
  defaultSelected,
  label,
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

  return (
    <>
      {label && <Label>{label}</Label>}
      <RadioGroupContainer>
        {options.map((option) => {
          return (
            <RadioRow key={option.value} onClick={() => onChangeOption(option.value)}>
              <RadioButton $selected={selectedOption === option.value} />
              <label>{option.label}</label>
            </RadioRow>
          )
        })}
      </RadioGroupContainer>
    </>
  )
}
