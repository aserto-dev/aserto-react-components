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

const groupedOptions = [
  ...identityOptions,
  {
    options: [
      {
        label: "I'm another group!",
        value: 'x',
        shouldStopPropagation: true,
        onClick: () => console.log('clicked'),
      },
    ],
  },
]

export const Primary = Template.bind({})
Primary.args = {
  options: identityOptions,
}

export const PrimaryGrouped = Template.bind({})
PrimaryGrouped.args = {
  options: groupedOptions,
  value: 'option1',
}

export const PrimaryWithLabel = Template.bind({})
PrimaryWithLabel.args = {
  options: identityOptions,
  label: 'Organization',
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  options: identityOptions,
  disabled: true,
}

export const PrimaryDisabledWithLabel = Template.bind({})
PrimaryDisabledWithLabel.args = {
  options: identityOptions,
  label: 'Organization',
  disabled: true,
}

export const PrimaryWithDefaultValue = Template.bind({})
PrimaryWithDefaultValue.args = {
  options: identityOptions,
  label: 'Organization',
  defaultValue: identityOptions.find((option) => option.value === 'MANUAL'),
}

export const PrimaryWithDefaultValueDisabled = Template.bind({})
PrimaryWithDefaultValueDisabled.args = {
  options: identityOptions,
  label: 'Organization',
  defaultValue: identityOptions.find((option) => option.value === 'MANUAL'),
  disabled: true,
}
