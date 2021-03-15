import React, { useRef, useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Select, SelectProps, SelectWithRef } from '../components/Select'

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

export const Primary = Template.bind({})
Primary.args = {
  options: identityOptions,
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

export const WithRef = () => {
  const ref = useRef(null)
  const [leke, setLeke] = useState(null)
  console.log(0, ref)
  return (
    <div>
      <Select
        ref={ref}
        // @ts-ignore
        options={[{ value: 1, label: 3 }]}
        onChange={() => {
          ref.current.focus()
        }}
      />
      <Select options={[{ value: 2, label: 2 }]} onChange={() => ref.current.focus()} />
    </div>
  )
}
