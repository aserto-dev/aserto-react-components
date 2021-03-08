import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { TextArea, TextAreaProps } from '../components/TextArea'

export default {
  title: 'Common/TextArea',
  component: TextArea,
} as Meta

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'JWT',
}

export const PrimaryWithValue = Template.bind({})
PrimaryWithValue.args = {
  value: 'Hey, TextArea!',
}

export const PrimaryWithDisabled = Template.bind({})
PrimaryWithDisabled.args = {
  placeholder: 'JWT',
  disabled: true,
}
export const PrimaryWithDisabledAndValue = Template.bind({})
PrimaryWithDisabledAndValue.args = {
  placeholder: 'JWT',
  value: 'Hey, TextArea!',
  disabled: true,
}
