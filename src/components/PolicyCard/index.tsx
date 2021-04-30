import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import policyLoadedIcon from './policy.svg'
import policyPendingIcon from './policy-pending.svg'
import policyErrorIcon from './policy-error.svg'
import remove from './remove-icon.svg'
// @ts-ignore
import loadingSpinner from './loading.gif'
import Tooltip, { TooltipPrimitive } from '@atlaskit/tooltip'
import { mapTestIdToProps } from '../../utils'

export type PolicyCardProps = {
  id?: string
  name?: string
  repoUrl?: string
  onClick: () => void
  onClickRemoveIcon?: () => void
  testId?: string
  disabled?: boolean
  policyIconVariant?: 'pending' | 'error' | 'loaded'
  errors?: Array<string>
}

const InlineDialog = styled(TooltipPrimitive)`
  background: ${theme.grey20};
  font-size: 14px;
  color: ${theme.grey100};
  border-radius: 6px;
  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */
  max-width: 300px;
  padding: 8px;
`

const Icon = styled.img`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`

const CardContent = styled.div`
  width: 100%;
`

const CardImg = styled.img``

const PolicyCardContainer = styled.div<{ disabled?: boolean }>`
  padding: 10px;
  position: relative;
  min-width: 428px;
  max-width: 428px;
  height: 104px;
  border-radius: 5px;
  background-color: ${theme.grey20};
  color: ${theme.grey100};
  display: flex;
  justify-content: center;
  background-size: cover;

  &:hover {
    background-color: ${theme.grey30};
    background-size: cover;
    cursor: pointer;
    ${Icon} {
      display: block;
    }
  }
  div:first-child {
    display: flex;
    align-items: center;
  }
  ${CardImg} {
    margin-right: 10px;
    width: 82px;
  }
  ${({ disabled }) => {
    return disabled
      ? css`
          background-color: ${theme.grey10};
          color: ${theme.grey40};
          &:hover {
            background-color: ${theme.grey10};
            cursor: auto;
          }
          ${CardContent} {
            pointer-events: none;
          }
          ${CardImg} {
            opacity: 0.4;
          }
        `
      : ''
  }};
  @media (max-width: 500px) {
    min-width: 100%;
    height: 91px;
    ${CardImg} {
      width: 56px;
    }
    ${Icon} {
      display: block;
    }
  }
`

const CardText = styled.div<{ bold?: boolean }>`
  font-size: 14px;
  word-wrap: break-word;
  @media (max-width: 500px) {
    max-width: 210px;
  }
  margin-left: 10px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 500)};
`

const TextContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const ErrorMessage = styled.div`
  position: absolute;
  left: 34px;
  top: 41px;
  pointer-events: auto;
  cursor: default;
  color: ${theme.grey100};
`

const WorkingSpinnerContainer = styled.div`
  position: absolute;
  left: 24px;
  top: 36px;
  pointer-events: auto;
  cursor: default;
  color: ${theme.grey100};
  font-size: 12px;
  font-weight: 600;
  img {
    width: 55px;
    margin-bottom: 4px;
  }
`

export const PolicyCard: React.FC<PolicyCardProps> = ({
  name,
  repoUrl,
  onClick,
  onClickRemoveIcon,
  testId,
  disabled,
  policyIconVariant,
  errors,
  ...props
}) => {
  const getAppIconBasedOnIconVariant = useCallback(() => {
    const obj = {
      pending: policyPendingIcon,
      error: policyErrorIcon,
      loaded: policyLoadedIcon,
    }
    return obj[policyIconVariant] || obj.loaded
  }, [policyIconVariant])
  const formatErrorsToDisplay = () => {
    return (
      <div>
        {errors.map((error) => {
          return <div key={error}>- {error}</div>
        })}
      </div>
    )
  }

  const shouldDisplayPolicyErrorOverlay = errors?.length > 0 && policyIconVariant === 'error'

  return (
    <PolicyCardContainer {...mapTestIdToProps(testId)} {...props} disabled={disabled}>
      <CardContent onClick={onClick} {...mapTestIdToProps(`${testId}-content`)}>
        <CardImg src={getAppIconBasedOnIconVariant()} alt="application" />
        {shouldDisplayPolicyErrorOverlay && (
          <Tooltip component={InlineDialog} content={formatErrorsToDisplay}>
            <ErrorMessage>Error</ErrorMessage>
          </Tooltip>
        )}
        {policyIconVariant === 'pending' && (
          <WorkingSpinnerContainer>
            <img src={loadingSpinner} />
            <div> Working... </div>
          </WorkingSpinnerContainer>
        )}
        <TextContainer>
          <CardText bold>{name}</CardText>
          {repoUrl && <CardText>{repoUrl}</CardText>}
        </TextContainer>
      </CardContent>
      {onClickRemoveIcon && (
        <Icon
          {...mapTestIdToProps(`${testId}-remove-btn`)}
          onClick={onClickRemoveIcon}
          src={remove}
          alt="remove"
        />
      )}
    </PolicyCardContainer>
  )
}