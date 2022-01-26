import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import usericon from './user.svg'
import { mapTestIdToProps } from '../../utils'
import { User } from '../../types'

export type UserCardProps = {
  user: User
  onClick: () => void
  disabled?: boolean
  testId?: string
}

const CardContainer = styled.div<{ $disabled?: boolean }>`
  width: 100%;
  min-width: 320px;
  max-height: 102px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: ${theme.grey20};
  background-size: cover;
  color: ${theme.grey100};
  &:hover {
    background-color: ${theme.grey30};
    cursor: pointer;
  }
  ${({ $disabled }) => {
    return $disabled
      ? css`
          pointer-events: none;
          background-color: ${theme.grey10};
          color: ${theme.grey40};
        `
      : ''
  }}
`

const CardContent = styled.div`
  overflow: hidden;
`

const CardText = styled.div<{ $bold?: boolean, $small?: boolean }>`
  ${({ $bold }) => {
    return $bold ? 'font-weight: bold' : ''
  }};
  ${({ $small }) => {
    return $small ? 'font-size: 12px; margin-top: 5px' : ''
  }};
`

const CardImageContainer = styled.div`
  margin-right: 30px;
  img {
    width: 84px;
    height: 84px;
  }
`

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onClick,
  disabled,
  testId,
  ...props
}) => (
  <CardContainer {...mapTestIdToProps(testId)} onClick={onClick} {...props} $disabled={disabled}>
    <CardImageContainer>
      <img src={user.picture || usericon} alt="picture" />
    </CardImageContainer>
    <CardContent>
      <CardText $bold>{user.display_name}</CardText>
      <CardText>{user.email}</CardText>
      <CardText $small>{user.id}</CardText>
    </CardContent>
  </CardContainer>
)
