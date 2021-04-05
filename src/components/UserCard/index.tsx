import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import usericon from './user.svg'

interface User {
  display_name: string
  email: string
  id: string
  picture: string
}

export type UserCardProps = {
  user: User
  onClick: () => void
}

const CardContainer = styled.div`
  width: 100%;
  min-width: 320px;
  max-height: 102px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  background-color: ${theme.primaryBlack};
  border: 1px solid ${theme.grey30};
  background-size: cover;
  &:hover {
    background-color: ${theme.grey10};
    cursor: pointer;
  }
`

const CardTitle = styled.div`
  color: ${theme.grey100};
  font-weight: bold;
`

const CardText = styled.div`
  color: ${theme.grey70};
`

const CardImageContainer = styled.div`
  margin-right: 30px;
  img {
    width: 84px;
    height: 84px;
  }
`

export const UserCard: React.FC<UserCardProps> = ({ user, onClick, ...props }) => (
  <CardContainer onClick={onClick} {...props}>
    <CardImageContainer>
      <img src={user.picture || usericon} alt="picture" />
    </CardImageContainer>
    <div>
      <CardTitle>{user.display_name}</CardTitle>
      <CardText>{user.email}</CardText>
    </div>
  </CardContainer>
)
