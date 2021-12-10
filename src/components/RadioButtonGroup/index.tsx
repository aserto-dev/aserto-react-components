import React from 'react'
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

interface RadioButtonGroupProps extends BaseRadioButtonGroupProps {
  options: Option[]
}

export const RadioButtonGroup = ({
  defaultSelected,
  label,
  onChange,
  options,
  testId,
  value,
}: RadioButtonGroupProps) => {
  return (
    <>
      {label && <Label {...mapTestIdToProps(`${testId}-field-label`)}>{label}</Label>}
      <RadioGroupContainer {...mapTestIdToProps(testId)}>
        <BaseRadioButtonGroup defaultSelected={defaultSelected} onChange={onChange} value={value}>
          <RadioButtonGroupContext.Consumer>
            {({ onChangeOption }) =>
              options.map((option) => {
                ;<RadioRowContainer
                  disabled={option.disabled}
                  key={option.value}
                  {...mapTestIdToProps(`${testId}-${option.value}-btn`)}
                  onClick={() => onChangeOption(option.value)}
                >
                  <RadioButton disabled={option.disabled} value={option.value} />
                  <label {...mapTestIdToProps(`${testId}-${option.value}-label`)}>
                    {option.label}
                  </label>
                </RadioRowContainer>
              })
            }
          </RadioButtonGroupContext.Consumer>
        </BaseRadioButtonGroup>
      </RadioGroupContainer>
    </>
  )
}
