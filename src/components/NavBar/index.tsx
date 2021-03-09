import React from 'react'
import { Navbar } from 'react-bootstrap'
// @ts-ignore
import logo from './logo.png'
import './NavBar.css'

export type NavBarProps = {
  children: React.ReactElement
}

export const NavBar = ({ children, ...props }) => {
  return (
    <div className="navbar-container" {...props}>
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
        <Navbar.Collapse>{children}</Navbar.Collapse>
      </Navbar>
    </div>
  )
}
