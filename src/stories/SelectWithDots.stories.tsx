import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { SelectWithDots, SelectWithDotsProps } from '../components/SelectWithDots'

export default {
  title: 'Common/SelectWithDots',
  component: SelectWithDots,
} as Meta

const Template: Story<SelectWithDotsProps> = (args) => <SelectWithDots {...args} />

const identityOptions = [
  {
    label: 'Verify connection',
    value: 'VERIFY',
    isDisabled: true,
  },
  {
    label: 'Disconnect',
    value: 'DISCONNECT',
  },
  {
    label: 'Edit...',
    value: 'EDIT',
  },
]

const groupedOptions = [
  {
    label: 'Verify connection',
    value: 'VERIFY',
    isDisabled: true,
  },
  {
    label: 'Edit...',
    value: 'EDIT',
  },
  {
    options: [
      {
        label: 'Disconnect',
        value: 'DISCONNECT',
        shouldStopPropagation: false,
        onClick: () => console.log('clicked'),
      },
    ],
  },
  {
    options: [
      {
        label: 'Remove',
        value: 'REMOVE',
        shouldStopPropagation: false,
        onClick: () => console.log('clicked'),
      },
    ],
  },
]

export const Primary = Template.bind({})
Primary.args = {
  options: identityOptions,
  menuAlignment: 'bottom-right',
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
  shouldDisableOptions: true,
  label: 'Organization',
  defaultValue: identityOptions.find((option) => option.value === 'MANUAL'),
}

export const OwnerVariantWithMessage = Template.bind({})
OwnerVariantWithMessage.args = {
  options: identityOptions,
  shouldDisableOptions: true,
  removeTenantText: 'Remove myself from tenant',
  label: 'Organization',
  defaultValue: identityOptions.find((option) => option.value === 'MANUAL'),
}

const CustomValueContainer = ({ children}) => {
  return <a>Hello, world! {children}</a>
}

export const PrimaryWithCustomValueContainer = Template.bind({})
PrimaryWithCustomValueContainer.args = {
  options: identityOptions,
  components: { ValueContainer: CustomValueContainer },
}
