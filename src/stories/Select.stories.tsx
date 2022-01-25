import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Select, SelectProps } from '../components/Select'

export default {
  title: 'Common/Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = (args) => (
  <Select onChange={(option) => console.log(option)} {...args} />
)

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
        label: "I'm a group!",
        value: 'group',
      },
    ],
  },
  {
    label: 'This is a label',
    options: [
      {
        label: "I'm a labeled group!",
        value: 'labeled_group',
      },
      {
        label:
          "I'm a labeled group with a big size! This should be enought to have more than one line in small screens. If you are not seeing more than one line, please reduce the width of your browser",
        value: 'labeled_group',
      },
    ],
  },
  {
    label: 'Ungrouped option',
    value: 'ungrouped',
  },
]

export const Primary = Template.bind({})
Primary.args = {
  options: identityOptions,
}

export const PrimaryGrouped = Template.bind({})
PrimaryGrouped.args = {
  options: groupedOptions,
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
