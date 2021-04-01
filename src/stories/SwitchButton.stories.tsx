import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { SwitchButton } from '../components/SwitchButton'

export default {
  title: 'Common/SwitchButton',
  component: SwitchButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<any> = (args) => <SwitchButton {...args} />

export const Primary = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Template
      checked={checked}
      onChange={(e) => {
        setChecked(e)
      }}
    />
  )
}
