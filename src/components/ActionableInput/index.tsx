import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Input, InputProps } from '../Input'
import show from './show.svg'
import hide from './hide.svg'
import copy from './copy.svg'
import { Button } from '../Button'

const Anm = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  10% {
    transform: translateY(-100%);
  }

  15% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(-10%);
  }

  40% {
    transform: translateY(0%);
  }

  100% {
    opacity: 1;
  }
`

const ActionableInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    padding: 8px;
    margin-left: 4px;
    &:active,
    &:focus {
      animation: ${Anm} 0.6s 0.1s 1 linear alternate;
      background-color: transparent !important;
    }
  }
`

const ButtonContainer = styled(Button)``

export type ActionableInputProps = InputProps & {
  onClickCopy?: (value: string) => void
  shouldShowHideShowButton?: boolean
}

export const ActionableInput: React.FC<ActionableInputProps> = ({
  onClickCopy,
  shouldShowHideShowButton,
  ...inputProps
}) => {
  const [type, setType] = useState(inputProps.type || 'text')
  return (
    <ActionableInputContainer>
      <Input {...inputProps} type={type} />
      {onClickCopy && (
        <ButtonContainer
          variant="secondary-borderless"
          onClick={() => onClickCopy(String(inputProps.value))}
        >
          <img src={copy} alt="copy" />
        </ButtonContainer>
      )}
      {shouldShowHideShowButton && (
        <>
          {type === 'password' ? (
            <Button variant="secondary-borderless" onClick={() => setType('text')}>
              <img alt="show" src={show} />
            </Button>
          ) : (
            <Button onClick={() => setType('password')} variant="secondary-borderless">
              <img alt="hide" src={hide} />
            </Button>
          )}
        </>
      )}
    </ActionableInputContainer>
  )
}
