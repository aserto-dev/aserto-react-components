import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { NavBar, NavBarProps } from '../components/NavBar'
import { Nav } from 'react-bootstrap'
import { NavLink as RouterNavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Select, SelectOption } from '../components/Select'

export default {
  title: 'Common/NavBar',
  component: NavBar,
} as Meta

const TenantInputContainer = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  img {
    margin: auto 30px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 15px;
    margin-right: 20px;
  }
`

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />
const options: SelectOption[] = [
  { value: 'tenant', label: 'tenant' },
  {
    // @ts-expect-error
    options: [
      {
        label: 'Manage tenant',
        value: 'manage-tenant',
        shouldStopPropagation: true,
        onClick: () => console.log(2),
      },
    ],
  },
]

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
  uncollapsableContent: (
    <TenantInputContainer>
      <Select
        style={{
          width: '100%',
          height: 35,
        }}
        options={options}
        onChange={console.log}
      />
    </TenantInputContainer>
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
export const PrimaryWithLG = Template.bind({})
PrimaryWithLG.args = {
  showBrandSeparator: true,
  expand: 'lg',
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
