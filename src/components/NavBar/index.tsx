import React from 'react'
import { Navbar } from 'react-bootstrap'
import './NavBar.css'

const NavBar = ({children, ...props}) => {
    console.log('v1')
    return <div className='navbar-container' {...props}>
        <Navbar className="navbar-dark" expand="md">
            <Navbar.Brand>
                <img
                    src="https://res.cloudinary.com/drdpedroso/image/upload/v1614880272/logo_tj6soa.png"
                    width="48"
                    height="48"
                    style={{marginLeft: 10}}
                    className="d-inline-block align-center"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                {children}
            </Navbar.Collapse>
        </Navbar>
    </div>
}
export default NavBar
