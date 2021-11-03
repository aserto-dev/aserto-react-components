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
  z-index: 2;
  ${({ $wasClicked }) => {
    return $wasClicked
      ? css`
          animation: ${Anm} 0.6s 0.1s 1 linear alternate;
          background-color: transparent !important;
        `
      : ''
  }}
`

const ShowButton = styled(Button)`
  margin-left: -74px;
  z-index: 2;
`

const RotateKeyButton = styled(Button)`
  margin-left: 55px;
  width: 120;
  img {
    padding-right: 10px;
  }
`

export type ActionableInputProps = InputProps & {
  onClickCopy?: (value: string) => void
  shouldShowHideShowButton?: boolean
  testId?: string
  onClickRotateModal?: (value: boolean) => void
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
                <ShowButton
                  variant="secondary-borderless"
                  onClick={() => setType('text')}
                  {...mapTestIdToProps(`${testId}-show-btn`)}
                >
                  <img alt="show" src={show} />
                </ShowButton>
              ) : (
                <ShowButton
                  onClick={() => setType('password')}
                  variant="secondary-borderless"
                  {...mapTestIdToProps(`${testId}-hide-btn`)}
                >
                  <img alt="hide" src={hide} />
                </ShowButton>
              )}
            </>
          )}
          {onClickRotateModal && (
            <RotateKeyButton
              onClick={() => onClickRotateModal(true)}
              variant="danger"
              {...mapTestIdToProps(`${testId}-rotate-btn`)}
            >
              <img src={rotateKey} alt="rotate key" />
              Rotate key
            </RotateKeyButton>
          )}
        </CenteredRow>
      </Label>
    </ActionableInputContainer>
  )
}
