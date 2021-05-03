import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { MembersTable } from '../components/MembersTable'

export default {
  title: 'Common/MembersTable',
  component: MembersTable,
} as Meta

const Template: Story<any> = (args) => <MembersTable {...args} />
const data = [
  {
    image: 'https://i.pinimg.com/564x/e2/39/42/e239424e363082347f69d4d35b9b680e.jpg',
    name: 'Gert Drapers',
    email: 'gert@acmcorp.net',
    role: 'Admin',
    status: 'ACTIVE',
  },
  {
    image: 'https://i.pinimg.com/564x/e2/39/42/e239424e363082347f69d4d35b9b680e.jpg',
    name: 'Gert Drapers2',
    email: 'gert@acmcorp.net',
    role: 'Admin',
    status: 'PENDING',
  },
  {
    image: 'https://i.pinimg.com/564x/e2/39/42/e239424e363082347f69d4d35b9b680e.jpg',
    name: 'Gert Drapers3',
    email: 'gert@acmcorp.net',
    role: 'View',
    status: 'EXPIRED',
  },
]
export const Primary = Template.bind({})
Primary.args = {
  data,
}
