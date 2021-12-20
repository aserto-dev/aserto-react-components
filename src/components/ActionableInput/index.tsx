import React from 'react'
import styled from 'styled-components'
import { Input, InputProps } from '../Input'
import { Label } from '../Label'

const CenteredRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const ActionableInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

export type ActionableInputProps = InputProps & {
  testId?: string
}

export const ActionableInput: React.FC<ActionableInputProps> = ({
  testId,
  label,
  type,
  ...inputProps
}) => {
  return (
    <ActionableInputContainer>
      <Label>
        {label}
        <CenteredRow>
          <Input {...inputProps} type={type} data-testid={testId} />
        </CenteredRow>
      </Label>
    </ActionableInputContainer>
  )
}
