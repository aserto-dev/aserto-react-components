import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from '../components/Checkbox'

export default {
  title: 'Common/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
}

export const PrimaryWithLabel = Template.bind({})
PrimaryWithLabel.args = {
  label: 'Im a label'
}

export const PrimaryWithLabelDisabled = Template.bind({})
PrimaryWithLabelDisabled.args = {
  label: 'Im a label',
  disabled: true
}

export const PrimaryChecked = Template.bind({})
PrimaryChecked.args = {
  checked: true
}

export const PrimaryCheckedDisabled = Template.bind({})
PrimaryCheckedDisabled.args = {
  checked: true,
  disabled: true
}
