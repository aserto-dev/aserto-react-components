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
    id: 1,
    image: 'https://i.pinimg.com/564x/e2/39/42/e239424e363082347f69d4d35b9b680e.jpg',
    name: 'Gert Drapers',
    email: 'gert@acmcorp.net',
    role: 'MEMBER',
    status: 'ACTIVE',
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/564x/e2/39/42/e239424e363082347f69d4d35b9b680e.jpg',
    name: 'Gert Drapers2',
    email: 'gert@acmcorp.net',
    role: 'OWNER',
    status: 'PENDING',
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/564x/e2/39/42/e239424e363082347f69d4d35b9b680e.jpg',
    name: 'Gert Drapers3',
    email: 'gert@acmcorp.net',
    role: 'VIEWER',
    status: 'EXPIRED',
  },
]
export const Primary = Template.bind({})
Primary.args = {
  data,
}
