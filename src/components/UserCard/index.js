import React from 'react'
import { Card } from 'react-bootstrap'
import usericon from './user.svg'
import './UserCard.css' 

const UserCard = ({user, onClick, ...props}) => 
  <Card className='user-card' onClick={onClick} {...props}>
    <div className='display-flex'>
      <div className='user-card-image'>
        <Card.Img src={user.picture} alt="picture" onError={(e) => e.target.src = usericon}/>
      </div>
      <Card.Body>
        <Card.Title as="h5">{user.display_name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
      </Card.Body>
    </div>
  </Card>

export default UserCard