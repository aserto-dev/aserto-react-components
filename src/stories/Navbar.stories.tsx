import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { NavBar, NavBarProps } from '../components/NavBar'
import { NavLink as RouterNavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Select } from '../components/Select'
import { NavItem } from '../components/NavBar/styles'

export default {
  title: 'Common/NavBar',
  component: NavBar,
} as Meta

const TenantInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  margin-right: 20px;
  max-width: 260px;
  min-width: 135px;
  @media (min-width: 992px) {
    width: 260px;
    margin-top: -15px;
    margin-right: 20px;
    img {
      margin: auto 10px auto 30px;
    }
  }
  @media (max-width: 992px) {
    margin-left: -10px;
    img {
      display: none;
    }
  }
`

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />
const options = [
  { value: 'tenant', label: 'tenant' },
  {
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
  showBrandSeparator: true,
  children: (
    <>
      <ul>
        <NavItem>
          <RouterNavLink to="/" activeClassName="router-link-exact-active">
            Home
          </RouterNavLink>
        </NavItem>
        <NavItem>
          <RouterNavLink to="/ui/applications" activeClassName="router-link-exact-active">
            Policy browser
          </RouterNavLink>
        </NavItem>
        <NavItem>
          <RouterNavLink to="/ui/playground" activeClassName="router-link-exact-active">
            Policy playground
          </RouterNavLink>
        </NavItem>
      </ul>
    </>
  ),
  uncollapsableContent: (
    <TenantInputContainer>
      <Select
        style={{
          width: '100%',
          height: 35,
        }}
        // @ts-ignore
        options={options}
        onChange={console.log}
      />
    </TenantInputContainer>
  ),
}

// export const PrimaryWithBrandSeparator = Template.bind({})
// PrimaryWithBrandSeparator.args = {
//   showBrandSeparator: true,
//   children: (
//     <Nav as="ul" className="mr-auto">
//       <Nav.Item as="li">
//         <RouterNavLink to="/" activeClassName="router-link-exact-active">
//           Home
//         </RouterNavLink>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <RouterNavLink
//           as={RouterNavLink}
//           to="/ui/applications"
//           activeClassName="router-link-exact-active"
//         >
//           Policy browser
//         </RouterNavLink>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <RouterNavLink to="/ui/playground" activeClassName="router-link-exact-active">
//           Policy playground
//         </RouterNavLink>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <RouterNavLink to="/ui/apidocs" activeClassName="router-link-exact-active">
//           API browser
//         </RouterNavLink>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <RouterNavLink to="/ui/directory" activeClassName="router-link-exact-active">
//           Directory browser
//         </RouterNavLink>
//       </Nav.Item>
//     </Nav>
//   ),
// }
// export const PrimaryWithLG = Template.bind({})
// PrimaryWithLG.args = {
//   showBrandSeparator: true,
//   expand: 'lg',
//   children: (
//     <Nav as="ul" className="mr-auto">
//       <Nav.Item as="li">
//         <RouterNavLink to="/" activeClassName="router-link-exact-active">
//           Home
//         </RouterNavLink>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <RouterNavLink
//           as={RouterNavLink}
//           to="/ui/applications"
//           activeClassName="router-link-exact-active"
//         >
//           Policy browser
//         </RouterNavLink>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <RouterNavLink to="/ui/playground" activeClassName="router-link-exact-active">
//           Policy playground
//         </RouterNavLink>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <RouterNavLink to="/ui/apidocs" activeClassName="router-link-exact-active">
//           API browser
//         </RouterNavLink>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <RouterNavLink to="/ui/directory" activeClassName="router-link-exact-active">
//           Directory browser
//         </RouterNavLink>
//       </Nav.Item>
//     </Nav>
//   ),
// }

export const PrimaryWithDefaultLinks = Template.bind({})
PrimaryWithDefaultLinks.args = {
  showBrandSeparator: true,
  children: (
    <>
      <ul>
        <NavItem>
          <a>Home</a>
        </NavItem>
        <NavItem>
          <a>Policy browser</a>
        </NavItem>
        <NavItem>
          <a>Policy playground</a>
        </NavItem>
      </ul>
    </>
  ),
}
