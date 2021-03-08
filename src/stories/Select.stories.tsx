import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Select, SelectProps } from '../components/Select'

export default {
  title: 'Common/Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = (args) => <Select {...args} />

const identityOptions = [
  {
    label: 'Anonymous',
    value: 'ANONYMOUS',
  },
  {
    label: 'JWT',
    value: 'JWT',
  },
  {
    label: 'Manual',
    value: 'MANUAL',
  },
]

export const Primary = Template.bind({})
Primary.args = {
  options: identityOptions,
}
