import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Checkbox } from '../components/Checkbox'

export default {
  title: 'Common/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<any> = (args) => <Checkbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  onChange: console.log
}

export const PrimaryChecked = Template.bind({})
PrimaryChecked.args = {
  onChange: console.log,
  checked: true
}
