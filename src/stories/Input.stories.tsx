import React, { useRef } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Input, InputProps } from '../components/Input'

export default {
  title: 'Common/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'JWT',
}

export const PrimaryWithValue = Template.bind({})
PrimaryWithValue.args = {
  value: 'Hey, input!',
}

export const PrimaryWithDisabled = Template.bind({})
PrimaryWithDisabled.args = {
  placeholder: 'JWT',
  disabled: true,
}
export const PrimaryWithDisabledAndValue = Template.bind({})
PrimaryWithDisabledAndValue.args = {
  placeholder: 'JWT',
  value: 'Hey, Input!',
  disabled: true,
}

export const PrimaryWithLabel = Template.bind({})
PrimaryWithLabel.args = {
  placeholder: 'JWT',
  value: 'Hey, Input!',
  label: 'Tenant Name',
}

export const PrimaryWithLabelAndInfo = Template.bind({})
PrimaryWithLabelAndInfo.args = {
  placeholder: 'JWT',
  value: 'Hey, Input!',
  label: 'Tenant Name',
  info: 'Start with a letter. Must be 6 to 20 alphanumeric characters.',
}

export const PrimaryValid = Template.bind({})
PrimaryValid.args = {
  placeholder: 'JWT',
  value: 'Hey, Input!',
  isValid: true,
}

export const PrimaryError = Template.bind({})
PrimaryError.args = {
  error: 'Too short bto',
  placeholder: 'JWT',
  value: 'Hey, Input!',
}

export const PrimaryUnavailable = Template.bind({})
PrimaryUnavailable.args = {
  error: 'Name unavailable',
  placeholder: 'JWT',
  value: 'Hey, Input!',
  isUnavailable: true,
}

export const PrimaryWithRef = () => {
  const ref = useRef(null)
  return (
    <div>
      <Input ref={ref} value={0} onChange={console.log} />
      <button
        onClick={() => {
          ref?.current?.focus()
        }}
      >
        Click to focus
      </button>
    </div>
  )
}

export const PrimaryWithSmallLabel = Template.bind({})
PrimaryWithSmallLabel.args = {
  value: 'Hey, Input!',
  label: 'Label',
  hasSmallLabel: true,
}
