import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../theme'
import appicon from './application.svg'
import remove from './remove-icon.svg'
import { Button } from '../Button'
import { mapTestIdToProps } from '../../utils'

export type ApplicationCardProps = {
  id?: string
  name?: string
  repoUrl?: string
  onClick: () => void
  onClickRemoveIcon?: () => void
  testId?: string
}
const Icon = styled.img`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
`
const ApplicationCardContainer = styled(Card)`
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
  .card-img {
    margin: 10px;
    width: 82px;
  }
  @media (max-width: 500px) {
    min-width: 100%;
    height: 91px;
    .card-img {
      width: 56px;
    }
    ${Icon} {
      display: block;
    }
  }
`

const CardText = styled.div<{ bold?: boolean }>`
  font-size: 14px;
  max-width: 290px;
  @media (max-width: 500px) {
    max-width: 210px;
  }
  margin-left: 12px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 500)};
`

const TextContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const ApplicationCard: React.FC<ApplicationCardProps> = ({
  name,
  repoUrl,
  onClick,
  onClickRemoveIcon,
  testId,
  ...props
}) => (
  <ApplicationCardContainer {...mapTestIdToProps(testId)} {...props}>
    <div onClick={onClick} {...mapTestIdToProps(`${testId}-content`)}>
      <Card.Img src={appicon} alt="application" />
      <TextContainer>
        <CardText bold>{name}</CardText>
        {repoUrl && <CardText>{repoUrl}</CardText>}
      </TextContainer>
    </div>
    {onClickRemoveIcon && (
      <Icon
        {...mapTestIdToProps(`${testId}-remove-btn`)}
        onClick={onClickRemoveIcon}
        src={remove}
        alt="remove"
      />
    )}
  </ApplicationCardContainer>
)
