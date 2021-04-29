import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { MembersTable } from '../components/MembersTable'

export default {
  title: 'Common/MembersTable',
  component: MembersTable,
} as Meta

const Template: Story<any> = (args) => <MembersTable {...args} />

export const Primary = Template.bind({})
Primary.args = {}
