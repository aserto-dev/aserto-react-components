import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../theme'
import appicon from './application.svg'

export type ApplicationCardProps = {
  application: string
  onClick: () => void
}

const ApplicationCardContainer = styled(Card)`
  max-width: 428px;
  height: 104px;
  border-radius: 5px;
  background-color: ${theme.grey20};
  background-size: cover;
  margin: 0px 20px 20px 0px !important;
  &:hover {
    background-color: #35393d;
    background-size: cover;
    cursor: pointer;
  }
  div:first-child {
    display: flex;
  }
  .card-img {
    margin: 10px;
    width: 82px;
  }
  .card-title {
    color: ${theme.grey100};
    font-size: 14px;
    vertical-align: middle;
    line-height: 80px;
    text-decoration: none solid rgb(215, 216, 216);
    margin: 10px;
  }
`

export const ApplicationCard: React.FC<ApplicationCardProps> = ({
  application,
  onClick,
  ...props
}) => (
  <ApplicationCardContainer onClick={onClick} {...props}>
    <div>
      <Card.Img src={appicon} alt="application" />
      <Card.Title>{application}</Card.Title>
    </div>
  </ApplicationCardContainer>
)
