import React, { useState } from 'react'
import styled from 'styled-components'

const UserDropdown = styled.div`
  flex-wrap: wrap;
  padding-left: 0;
  position: relative;
  float: right;
  margin-bottom: 0;
  list-style: none;
  display: none;
  a {
    margin: auto 20px;
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    display: block;
    padding: 0.5rem 1rem;
    img {
      border-radius: 50%;
    }
  }
  @media (min-width: 1200px) {
    display: block;
  }
`

const DropdownContainer = styled.div`
  position: absolute;
  inset: 0px auto auto 0px;
  transform: translate3d(-97px, 62px, 0px);
  display: block;
  border-radius: 5px;
  margin: 5px !important;
  background-color: #1e1e1e;
  color: #a0a0a0;
  width: 203px;
  top: 9px;
  left: -20px;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  font-size: 1rem;
  text-align: left;
  list-style: none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
`

const DropdownMenu = styled.div``

const DropdownHeader = styled.div`
  color: #e7e7e7;
  font-weight: bold;
  display: block;
  overflow: hidden;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  white-space: nowrap;
  text-align: left;

  list-style: none;
`

const DropdownItem = styled.div`
  color: rgb(160, 160, 160);
  display: block;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  margin: auto !important;
  &:hover {
    background-color: rgb(65, 65, 65);
    color: rgb(231, 231, 231);
  }
`

export const NavBarUserDropdown = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <UserDropdown>
        <div>
          <a onClick={() => setOpen((o) => !o)}>
            <img
              height="41"
              width="41"
              src="https://s.gravatar.com/avatar/0a50ef6565b21bc790bb5f66d92ac018?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fed.png"
            />
          </a>
        </div>
        {open && (
          <DropdownContainer>
            <DropdownMenu>
              <DropdownHeader>drdpedroso@gmail.com</DropdownHeader>
              <DropdownItem>Leke</DropdownItem>
              <DropdownItem>Leke</DropdownItem>
              <DropdownItem>Leke</DropdownItem>
            </DropdownMenu>
          </DropdownContainer>
        )}
      </UserDropdown>
    </>
  )
}
