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
