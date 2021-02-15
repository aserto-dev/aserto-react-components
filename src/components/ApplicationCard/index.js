import React from 'react'
import { Card } from 'react-bootstrap'
import appicon from './application.svg'
import './ApplicationCard.css'

const ApplicationCard = ({application, onClick, ...props}) => 
  <Card className='application-card' onClick={onClick} {...props}>
    <div className='display-flex'>
      <Card.Img src={appicon} alt='application' />
      <Card.Title>{application}</Card.Title>
    </div>
  </Card>

export default ApplicationCard