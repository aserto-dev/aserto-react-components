import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Loading } from '../components/Loading'

export default {
  title: 'Common/Loading',
  component: Loading,
} as Meta

const Template: Story = (args) => <Loading {...args} />

export const Primary = Template.bind({})
Primary.args = {}
