import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { SelectWithoutControl, SelectWithoutControlProps } from '../components/SelectWithoutControl'

export default {
  title: 'Common/SelectWithoutControl',
  component: SelectWithoutControl,
} as Meta

const Template: Story<SelectWithoutControlProps> = (args) => <SelectWithoutControl {...args} />

const identityOptions = [
  {
    label: 'Anonymous',
    value: 'ANONYMOUS',
    isDisabled: true,
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

export const OwnerVariant = Template.bind({})
OwnerVariant.args = {
  options: identityOptions,
  shouldDisabledOptions: true,
  label: 'Organization',
  defaultValue: identityOptions.find((option) => option.value === 'MANUAL'),
}
