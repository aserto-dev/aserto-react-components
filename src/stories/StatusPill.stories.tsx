import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { StatusPill } from '../components/StatusPill'
import { theme } from '../theme'

export default {
  title: 'Common/StatusPill',
  component: StatusPill,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<any> = (args) => <StatusPill {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Active',
  backgroundColor: theme.apple50,
}
