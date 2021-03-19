import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { NavBar, NavBarProps } from '../components/NavBar'
import { Nav } from 'react-bootstrap'
import { NavLink as RouterNavLink } from 'react-router-dom'

export default {
  title: 'Common/NavBar',
  component: NavBar,
} as Meta

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <Nav as="ul" className="mr-auto">
      <Nav.Item as="li">
        <Nav.Link as={RouterNavLink} to="/" activeClassName="router-link-exact-active">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          as={RouterNavLink}
          to="/ui/applications"
          activeClassName="router-link-exact-active"
        >
          Policy browser
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={RouterNavLink} to="/ui/playground" activeClassName="router-link-exact-active">
          Policy playground
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={RouterNavLink} to="/ui/apidocs" activeClassName="router-link-exact-active">
          API browser
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={RouterNavLink} to="/ui/directory" activeClassName="router-link-exact-active">
          Directory browser
        </Nav.Link>
      </Nav.Item>
    </Nav>
  ),
}

export const PrimaryWithBrandSeparator = Template.bind({})
PrimaryWithBrandSeparator.args = {
  showBrandSeparator: true,
  children: (
    <Nav as="ul" className="mr-auto">
      <Nav.Item as="li">
        <Nav.Link as={RouterNavLink} to="/" activeClassName="router-link-exact-active">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          as={RouterNavLink}
          to="/ui/applications"
          activeClassName="router-link-exact-active"
        >
          Policy browser
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={RouterNavLink} to="/ui/playground" activeClassName="router-link-exact-active">
          Policy playground
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={RouterNavLink} to="/ui/apidocs" activeClassName="router-link-exact-active">
          API browser
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={RouterNavLink} to="/ui/directory" activeClassName="router-link-exact-active">
          Directory browser
        </Nav.Link>
      </Nav.Item>
    </Nav>
  ),
}
