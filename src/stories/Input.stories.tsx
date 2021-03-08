import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Input, InputProps } from '../components/Input'

export default {
  title: 'Common/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'JWT',
}

export const PrimaryWithValue = Template.bind({})
PrimaryWithValue.args = {
  value: 'Hey, input!',
}

export const PrimaryWithDisabled = Template.bind({})
PrimaryWithDisabled.args = {
  placeholder: 'JWT',
  disabled: true,
}
export const PrimaryWithDisabledAndValue = Template.bind({})
PrimaryWithDisabledAndValue.args = {
  placeholder: 'JWT',
  value: 'Hey, Input!',
  disabled: true,
}
