import React, { useCallback, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { Label } from '../Label'
import { mapTestIdToProps } from '../../utils'
import EmptyRadioButtonGroup, {
  EmptyRadioButtonGroupProps,
  RadioButtonGroupContext,
} from './EmptyRadioButtonGroup'
import RadioButton from './RadioButton'

export { EmptyRadioButtonGroup, EmptyRadioButtonGroupProps, RadioButtonGroupContext }

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

export interface RadioButtonGroupProps extends Omit<EmptyRadioButtonGroupProps, 'checked'> {
  defaultSelected?: string
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
  value,
}: RadioButtonGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value ?? defaultSelected)

  const onChangeInternal = useCallback(
    (value: string) => {
      setSelectedValue(value)
      onChange?.(value)
    },
    [onChange]
  )

  useEffect(() => {
    defaultSelected && onChange(defaultSelected)
  }, [defaultSelected, onChange])

  return (
    <>
      {label && <Label {...mapTestIdToProps(`${testId}-field-label`)}>{label}</Label>}
      <EmptyRadioButtonGroup onChange={onChangeInternal} checked={selectedValue}>
        <RadioGroupContainer {...mapTestIdToProps(testId)}>
          {options.map((option) => (
            <RadioRowContainer
              disabled={option.disabled}
              key={option.value}
              onClick={() => {
                option.value !== selectedValue && onChangeInternal(option.value)
              }}
              {...mapTestIdToProps(`${testId}-${option.value}-btn`)}
            >
              <RadioButton
                disabled={option.disabled}
                value={option.value}
                {...mapTestIdToProps(`${testId}-${option.value}-radio-button`)}
              />
              <label {...mapTestIdToProps(`${testId}-${option.value}-label`)}>{option.label}</label>
            </RadioRowContainer>
          ))}
        </RadioGroupContainer>
      </EmptyRadioButtonGroup>
    </>
  )
}
