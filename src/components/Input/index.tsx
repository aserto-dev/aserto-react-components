import React, { useEffect, useState } from 'react'
import { FormControl, FormControlProps } from 'react-bootstrap'
import styled, { css, keyframes } from 'styled-components'
import { theme } from '../../theme'
import valid from './valid.svg'
import invalid from './invalid.svg'
import unavaliable from './unavailable.svg'
import show from './show.svg'
import hide from './hide.svg'
import copy from './copy.svg'
import { Button } from '../Button'
import { Label } from '../Label'
import { mapTestIdToProps } from '../../utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange?: FormControlProps['onChange']
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
  label?: string
  info?: string
  error?: string | boolean
  isValid?: boolean
  isUnavailable?: boolean
  style?: React.CSSProperties
  hasSmallLabel?: boolean
  autoComplete?: string
  block?: boolean
  defaultValue?: string | number
  id?: string
  onClickCopy?: (value: string) => void
  shouldShowHideShowButton?: boolean
}

const getInputValueForState = (isValid: boolean, isInvalid: boolean, isUnavailable: boolean) => {
  if (isUnavailable) {
    return `border-color: ${theme.mojoAccent3} !important;background-image: url("${unavaliable}") !important; background-size: calc(5.2em + 0.375rem) calc(1em + 0.375rem) !important;`
  } else if (isValid) {
    return `border-color: ${theme.lochivarAccent2} !important;background-image: url("${valid}") !important; background-size: calc(4.2em + 0.375rem) calc(1em + 0.375rem) !important;`
  } else if (isInvalid) {
    return `border-color: ${theme.mojoAccent3} !important;background-image: url("${invalid}") !important; background-size: calc(3em + 0.375rem) calc(1em + 0.375rem) !important;`
  }
  return `border-color: #595959;`
}

const AsertoInput = styled(FormControl)<{
  isValid?: boolean
  isInvalid?: boolean
  $isUnavailable?: boolean
  $block?: boolean
}>`
  background-color: ${theme.primaryBlack};
  color: ${theme.grey100};
  margin-top: 8px;
  border-color: ${theme.grey40};
  &:focus {
    background-color: ${theme.primaryBlack};
    color: ${theme.grey100};
    outline: none;
    box-shadow: none;
    border-color: ${theme.lochivarAccent2};
    -webkit-box-shadow: none;
  }
  &:disabled {
    color: ${theme.grey70};
    background-color: ${theme.grey20};
    border-color: ${theme.grey20};
    opacity: 0.6;
  }
  ${({ isValid, isInvalid, $isUnavailable }) =>
    getInputValueForState(isValid, isInvalid, $isUnavailable)};
`

const InputContainer = styled.div<{ $block?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ $block }) => ($block ? 'width: 100%' : '')};
`

const InputButtonBlock = styled.div`
  display: flex;
  position: relative;
`
const ButtonsContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
`

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

const Info = styled.div`
  font-size: 14px;
  color: ${theme.grey70};
  margin-top: 8px;
  @media (max-width: 720px) {
    max-width: 270px;
  }
`

const Error = styled(Info)`
  color: ${theme.mojoAccent3};
`

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onChange,
      label,
      info,
      error,
      isValid,
      isUnavailable,
      style,
      hasSmallLabel,
      block,
      defaultValue,
      id,
      onClickCopy,
      shouldShowHideShowButton,
      type,
      value,
      ...props
    },
    ref
  ) => {
    const testId = props['data-testid']

    const [inputType, setInputType] = useState(type || 'text')
    const [wasClicked, setWasClicked] = useState(false)

    const shouldShowErrorState =
      !(error === false || error === '' || error === undefined) || isUnavailable
    const shouldDisplayInfo = !shouldShowErrorState && info
    const errorMessage = typeof error === 'string' ? error : null

    useEffect(() => {
      if (wasClicked) {
        const timeoutId = setTimeout(() => {
          setWasClicked(false)
        }, 800)
        return () => clearTimeout(timeoutId)
      }
    }, [wasClicked])

    return (
      <InputContainer $block={block}>
        <Label htmlFor={id} $small={hasSmallLabel}>
          {label}
          <InputButtonBlock>
            <AsertoInput
              ref={ref}
              isValid={isValid && !shouldShowErrorState}
              isInvalid={shouldShowErrorState}
              $isUnavailable={isUnavailable}
              onChange={onChange}
              style={style}
              defaultValue={defaultValue}
              {...props}
              type={inputType}
              value={value}
            />
            {!(error || isUnavailable || isValid) && (
              <ButtonsContainer>
                {shouldShowHideShowButton && (
                  <>
                    {inputType === 'password' ? (
                      <HideShowButton
                        variant="secondary-borderless"
                        onClick={() => setInputType('text')}
                      >
                        <img alt="show" src={show} />
                      </HideShowButton>
                    ) : (
                      <HideShowButton
                        onClick={() => setInputType('password')}
                        variant="secondary-borderless"
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
                    onClick={(event) => {
                      setWasClicked(true)
                      event.currentTarget.blur()
                      onClickCopy(String(value))
                    }}
                  >
                    <img src={copy} alt="copy" />
                  </CopyButton>
                )}
              </ButtonsContainer>
            )}
          </InputButtonBlock>
        </Label>
        {shouldDisplayInfo && <Info {...mapTestIdToProps(`${testId}-info`)}>{info}</Info>}
        {errorMessage && <Error {...mapTestIdToProps(`${testId}-error`)}>{errorMessage}</Error>}
      </InputContainer>
    )
  }
)
