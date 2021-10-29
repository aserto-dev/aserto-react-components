import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Input, InputProps } from '../Input'
import show from './show.svg'
import hide from './hide.svg'
import copy from './copy.svg'
import rotateKey from './rotate-key.svg'
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
`

const ActionableInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const ButtonContainer = styled(Button)<{ $wasClicked?: boolean }>`
  padding: 8px;
  margin-left: -34px;
  ${({ $wasClicked }) => {
    return $wasClicked
      ? css`
          animation: ${Anm} 0.6s 0.1s 1 linear alternate;
          background-color: transparent !important;
        `
      : ''
  }}
`

const RotateKeyButton = styled(Button)`
  margin-left: 55px;
  background-color: #692525;
  width: 120;
`

export type ActionableInputProps = InputProps & {
  onClickCopy?: (value: string) => void
  shouldShowHideShowButton?: boolean
  testId?: string
  onClickRotateModal?: (value: string) => void
}

export const ActionableInput: React.FC<ActionableInputProps> = ({
  onClickCopy,
  shouldShowHideShowButton,
  testId,
  label,
  onClickRotateModal,
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
          {onClickCopy && (
            <ButtonContainer
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
            </ButtonContainer>
          )}
          {shouldShowHideShowButton && (
            <>
              {type === 'password' ? (
                <Button
                  variant="secondary-borderless"
                  onClick={() => setType('text')}
                  {...mapTestIdToProps(`${testId}-show-btn`)}
                  style={{ marginLeft: '-74px' }}
                >
                  <img alt="show" src={show} />
                </Button>
              ) : (
                <Button
                  onClick={() => setType('password')}
                  variant="secondary-borderless"
                  {...mapTestIdToProps(`${testId}-hide-btn`)}
                  style={{ marginLeft: '-74px' }}
                >
                  <img alt="hide" src={hide} />
                </Button>
              )}
            </>
          )}
          {onClickRotateModal && (
            <RotateKeyButton
              onClick={() => onClickRotateModal}
              variant="danger"
              {...mapTestIdToProps(`${testId}-rotate-btn`)}
              style={{ marginLeft: '55px', backgroundColor: '#692525', width: 120 }}
            >
              <img src={rotateKey} alt="rotate key" style={{ paddingRight: '10px' }} />
              Rotate key
            </RotateKeyButton>
          )}
        </CenteredRow>
      </Label>
    </ActionableInputContainer>
  )
}
