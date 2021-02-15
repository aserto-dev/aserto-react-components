import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from './logo.png'
import './NavBar.css'

const NavBar = ({children, ...props}) => 
  <div className='navbar-container' {...props}>
    <Navbar className="navbar-dark" expand="md">
      <Navbar.Brand>
        <img
          src={logo}
          width="48"
          height="48"
          style={{ marginLeft: 10 }}
          className="d-inline-block align-center"
          alt="logo"
        />            
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {children}
      </Navbar.Collapse>
    </Navbar>
  </div>

export default NavBar
