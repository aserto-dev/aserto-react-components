import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { Label } from '../Label'
import { mapTestIdToProps } from '../../utils'
import BaseRadioButtonGroup, {
  BaseRadioButtonGroupProps,
  RadioButtonGroupContext,
} from './BaseRadioButtonGroup'
import RadioButton from './RadioButton'

export { BaseRadioButtonGroup, BaseRadioButtonGroupProps, RadioButtonGroupContext }

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const RadioRowContainer = styled.div<{ disabled?: boolean }>`
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

export interface RadioButtonGroupProps extends BaseRadioButtonGroupProps {
  defaultSelected: string
  label?: string
  options: readonly Option[]
  testId?: string
  value?: string
}

export const RadioButtonGroup = ({
  defaultSelected,
  label,
  onChange,
  options,
  testId,
  checked: value,
}: RadioButtonGroupProps) => {
  useEffect(() => {
    defaultSelected && onChange(defaultSelected)
  }, [defaultSelected, onChange])

  const { onSelectValue } = useContext(RadioButtonGroupContext)

  return (
    <>
      {label && <Label {...mapTestIdToProps(`${testId}-field-label`)}>{label}</Label>}
      <BaseRadioButtonGroup onChange={onChange} checked={value ?? defaultSelected}>
        <RadioGroupContainer {...mapTestIdToProps(testId)}>
          {options.map((option) => (
            <RadioRowContainer
              disabled={option.disabled}
              key={option.value}
              {...mapTestIdToProps(`${testId}-${option.value}-btn`)}
              onClick={() => onSelectValue(option.value)}
            >
              <RadioButton
                disabled={option.disabled}
                value={option.value}
                {...mapTestIdToProps(`${testId}-radio-button`)}
              />
              <label {...mapTestIdToProps(`${testId}-${option.value}-label`)}>{option.label}</label>
            </RadioRowContainer>
          ))}
        </RadioGroupContainer>
      </BaseRadioButtonGroup>
    </>
  )
}
