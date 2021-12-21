import React from 'react'
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
  onClickCopy: null,
}

export const PrimaryWithCopy = Template.bind({})
PrimaryWithCopy.args = {
  placeholder: 'JWT',
  onClickCopy: console.log,
}

export const PrimaryWithHideShow = Template.bind({})
PrimaryWithHideShow.args = {
  placeholder: 'JWT',
  shouldShowHideShowButton: true,
}

export const PrimaryWithHideShowAndLabel = Template.bind({})
PrimaryWithHideShowAndLabel.args = {
  placeholder: 'JWT',
  shouldShowHideShowButton: true,
  label: 'Label',
}

export const PrimaryDisabledWithHideShowAndValue = Template.bind({})
PrimaryDisabledWithHideShowAndValue.args = {
  placeholder: 'JWT',
  shouldShowHideShowButton: true,
  label: 'Label',
  disabled: true,
  type: 'password',
  value: 'secretValue!123',
}
