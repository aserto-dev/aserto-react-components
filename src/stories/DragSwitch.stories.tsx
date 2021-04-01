import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { DragSwitch } from '../components/DragSwitch'
import { useState } from 'react'

export default {
  title: 'Common/DragSwitch',
  component: DragSwitch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<any> = (args) => <DragSwitch {...args} />

export const Primary = () => {
  const [checked, setChecked] = useState(false)

  return (
    <DragSwitch
      checked={checked}
      onChange={(e) => {
        setChecked(e)
      }}
    />
  )
}
