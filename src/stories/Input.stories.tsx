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
  onClickCopy: null,
}

export const PrimaryWithValue = Template.bind({})
PrimaryWithValue.args = {
  value: 'Hey, input!',
  onClickCopy: null,
}

export const PrimaryWithDisabled = Template.bind({})
PrimaryWithDisabled.args = {
  placeholder: 'JWT',
  disabled: true,
  onClickCopy: null,
}
export const PrimaryWithDisabledAndValue = Template.bind({})
PrimaryWithDisabledAndValue.args = {
  placeholder: 'JWT',
  value: 'Hey, Input!',
  disabled: true,
  onClickCopy: null,
}

export const PrimaryWithLabel = Template.bind({})
PrimaryWithLabel.args = {
  placeholder: 'JWT',
  value: 'Hey, Input!',
  label: 'Tenant Name',
  onClickCopy: null,
}

export const PrimaryWithLabelAndInfo = Template.bind({})
PrimaryWithLabelAndInfo.args = {
  placeholder: 'JWT',
  value: 'Hey, Input!',
  label: 'Tenant Name',
  info: 'Start with a letter. Must be 6 to 20 alphanumeric characters.',
  onClickCopy: null,
}

export const PrimaryValid = Template.bind({})
PrimaryValid.args = {
  placeholder: 'JWT',
  value: 'Hey, Input!',
  isValid: true,
  onClickCopy: null,
}

export const PrimaryError = Template.bind({})
PrimaryError.args = {
  error: 'Too short bto',
  placeholder: 'JWT',
  value: 'Hey, Input!',
  onClickCopy: null,
}

export const PrimaryUnavailable = Template.bind({})
PrimaryUnavailable.args = {
  error: 'Name unavailable',
  placeholder: 'JWT',
  value: 'Hey, Input!',
  isUnavailable: true,
  onClickCopy: null,
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
  onClickCopy: null,
}

export const PrimaryBlock = Template.bind({})
PrimaryBlock.args = {
  value: 'Hey, Input!',
  label: 'Label',
  block: true,
  onClickCopy: null,
}

export const PrimaryWithCopy = Template.bind({})
PrimaryWithCopy.args = {
  placeholder: 'JWT',
}

export const PrimaryWithCopyAndView = Template.bind({})
PrimaryWithCopyAndView.args = {
  placeholder: 'JWT',
  shouldShowHideShowButton: true,
  type: 'password',
}

export const PrimaryWithCopyViewIsValid = Template.bind({})
PrimaryWithCopyViewIsValid.args = {
  placeholder: 'JWT',
  shouldShowHideShowButton: true,
  type: 'password',
  isValid: true,
}

export const PrimaryWithCopyViewLabel = Template.bind({})
PrimaryWithCopyViewLabel.args = {
  placeholder: 'JWT',
  shouldShowHideShowButton: true,
  type: 'password',
  label: 'Label',
  value: 'View and Hide',
}
