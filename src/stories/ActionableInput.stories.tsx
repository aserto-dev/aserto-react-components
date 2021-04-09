import React, { useRef } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ActionableInput, ActionableInputProps } from '../components/ActionableInput'

export default {
  title: 'Common/ActionableInput',
  component: ActionableInput,
} as Meta

const Template: Story<ActionableInputProps> = (args) => <ActionableInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'JWT',
}

export const PrimaryWithValue = Template.bind({})
PrimaryWithValue.args = {
  value: 'Hey, ActionableInput!',
}

export const PrimaryWithDisabled = Template.bind({})
PrimaryWithDisabled.args = {
  placeholder: 'JWT',
  disabled: true,
}
export const PrimaryWithDisabledAndValue = Template.bind({})
PrimaryWithDisabledAndValue.args = {
  placeholder: 'JWT',
  value: 'Hey, ActionableInput!',
  disabled: true,
}

export const PrimaryWithLabel = Template.bind({})
PrimaryWithLabel.args = {
  placeholder: 'JWT',
  value: 'Hey, ActionableInput!',
  label: 'Tenant Name',
}

export const PrimaryWithLabelAndInfo = Template.bind({})
PrimaryWithLabelAndInfo.args = {
  placeholder: 'JWT',
  value: 'Hey, ActionableInput!',
  label: 'Tenant Name',
  info: 'Start with a letter. Must be 6 to 20 alphanumeric characters.',
}

export const PrimaryValid = Template.bind({})
PrimaryValid.args = {
  placeholder: 'JWT',
  value: 'Hey, ActionableInput!',
  isValid: true,
}

export const PrimaryError = Template.bind({})
PrimaryError.args = {
  error: 'Too short bto',
  placeholder: 'JWT',
  value: 'Hey, ActionableInput!',
}

export const PrimaryUnavailable = Template.bind({})
PrimaryUnavailable.args = {
  error: 'Name unavailable',
  placeholder: 'JWT',
  value: 'Hey, ActionableInput!',
  isUnavailable: true,
}

export const PrimaryWithSmallLabel = Template.bind({})
PrimaryWithSmallLabel.args = {
  value: 'Hey, ActionableInput!',
  label: 'Label',
  hasSmallLabel: true,
}
