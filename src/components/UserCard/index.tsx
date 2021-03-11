import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
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

const CardContainer = styled(Card)`
  min-width: 428px;
  max-width: 428px;
  height: 104px;
  border-radius: 5px;
  background-color: #35393d66;
  background-size: cover;
  margin: 0px 20px 20px 0px !important;
  &:hover {
    background-color: #35393d;
    background-size: cover;
    cursor: pointer;
  }
  .card-title {
    color: #d7d8d8;
    font-size: 18px;
    vertical-align: middle;
    text-decoration: none solid rgb(215, 216, 216);
  }
`

const CardImage = styled.div`
  margin: 10px;
  width: 82px;
  background-image: url('./user.svg');
`

export const UserCard: React.FC<UserCardProps> = ({ user, onClick, ...props }) => (
  <CardContainer onClick={onClick} {...props}>
    <div className="display-flex">
      <CardImage>
        <Card.Img src={user.picture} alt="picture" onError={(e) => (e.target.src = usericon)} />
      </CardImage>
      <Card.Body>
        <Card.Title as="h5">{user.display_name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
      </Card.Body>
    </div>
  </CardContainer>
)
