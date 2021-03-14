import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../theme'
import appicon from './application.svg'

export type ApplicationCardProps = {
  application: string
  repoUrl?: string
  onClick: () => void
}

const ApplicationCardContainer = styled(Card)`
  min-width: 428px;
  max-width: 428px;
  height: 104px;
  border-radius: 5px;
  background-color: ${theme.grey20};
  color: ${theme.grey100};
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
`

const CardText = styled.div<{ bold?: boolean }>`
  font-size: 14px;
  margin-left: 12px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 500)};
`

const TextContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const ApplicationCard: React.FC<ApplicationCardProps> = ({
  application,
  repoUrl,
  onClick,
  ...props
}) => (
  <ApplicationCardContainer onClick={onClick} {...props}>
    <div>
      <Card.Img src={appicon} alt="application" />
      <TextContainer>
        <CardText bold>{application}</CardText>
        {repoUrl && <CardText>{repoUrl}</CardText>}
      </TextContainer>
    </div>
  </ApplicationCardContainer>
)
