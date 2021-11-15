import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Input, InputProps } from '../Input'
import show from './show.svg'
import hide from './hide.svg'
import copy from './copy.svg'
import { Button } from '../Button'
import { mapTestIdToProps } from '../../utils'
import { Label } from '../Label'

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

const ButtonsContainer = styled.div`
  position: absolute;
  right: 0;
`
const CopyButton = styled(Button)<{ $wasClicked?: boolean }>`
  padding: 8px;
  align-items: center;
  ${({ $wasClicked }) => {
    return $wasClicked
      ? css`
          animation: ${Anm} 0.6s 0.1s 1 linear alternate;
          background-color: transparent !important;
        `
      : ''
  }}
`

const HideShowButton = styled(Button)`
  padding: 8px;
`

export type ActionableInputProps = InputProps & {
  onClickCopy?: (value: string) => void
  shouldShowHideShowButton?: boolean
  testId?: string
}

export const ActionableInput: React.FC<ActionableInputProps> = ({
  onClickCopy,
  shouldShowHideShowButton,
  testId,
  label,
  ...inputProps
}) => {
  const [type, setType] = useState(inputProps.type || 'text')
  const [wasClicked, setWasClicked] = useState(false)

  useEffect(() => {
    if (wasClicked) {
      setTimeout(() => {
        setWasClicked(false)
      }, 800)
    }
  }, [wasClicked])

  return (
    <ActionableInputContainer>
      <Label>
        {label}
        <CenteredRow>
          <Input {...inputProps} type={type} data-testid={testId} />
          {!(inputProps.error || inputProps.isUnavailable || inputProps.isValid) && (
            <ButtonsContainer>
              {shouldShowHideShowButton && (
                <>
                  {type === 'password' ? (
                    <HideShowButton
                      variant="secondary-borderless"
                      onClick={() => setType('text')}
                      {...mapTestIdToProps(`${testId}-show-btn`)}
                    >
                      <img alt="show" src={show} />
                    </HideShowButton>
                  ) : (
                    <HideShowButton
                      onClick={() => setType('password')}
                      variant="secondary-borderless"
                      {...mapTestIdToProps(`${testId}-hide-btn`)}
                    >
                      <img alt="hide" src={hide} />
                    </HideShowButton>
                  )}
                </>
              )}
              {onClickCopy && (
                <CopyButton
                  $wasClicked={wasClicked}
                  variant="secondary-borderless"
                  onClick={(e) => {
                    setWasClicked(true)
                    e.currentTarget.blur()
                    onClickCopy(String(inputProps.value))
                  }}
                  {...mapTestIdToProps(`${testId}-copy-btn`)}
                >
                  <img src={copy} alt="copy" />
                </CopyButton>
              )}
            </ButtonsContainer>
          )}
        </CenteredRow>
      </Label>
    </ActionableInputContainer>
  )
}
