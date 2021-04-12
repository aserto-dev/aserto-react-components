import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { RadioButtonGroup, RadioButtonGroupProps } from '../components/RadioButtonGroup'

export default {
  title: 'Common/RadioButtonGroup',
  component: RadioButtonGroup,
} as Meta

const Template: Story<RadioButtonGroupProps> = (args) => <RadioButtonGroup {...args} />

const options = [
  { value: 'template1', label: 'Existing' },
  { value: 'template2', label: 'Template 2' },
]

const optionsWithDisabled = [
  { value: 'template1', label: 'Existing' },
  { value: 'template2', label: 'Template 2', disabled: true },
]

export const Primary = Template.bind({})
Primary.args = {
  options: options,
}

export const PrimaryWithLabel = Template.bind({})
PrimaryWithLabel.args = {
  options: options,
  label: 'Label',
}

export const PrimaryWithDefaultSelected = Template.bind({})
PrimaryWithDefaultSelected.args = {
  options: options,
  defaultSelected: options[0].value,
}

export const PrimaryWithDisabled = Template.bind({})
PrimaryWithDisabled.args = {
  options: optionsWithDisabled,
}

export const PrimaryWithDisabledAndSelected = Template.bind({})
PrimaryWithDisabledAndSelected.args = {
  options: optionsWithDisabled,
  defaultSelected: optionsWithDisabled[1].value,
}
