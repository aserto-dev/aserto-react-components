import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, EvaluateDisplayMap, Input } from '..'

export default {
  title: 'Common/EvaluateDisplayMap',
  component: EvaluateDisplayMap,
} as Meta

const Template: Story = (args) => <EvaluateDisplayMap {...args} />

export const WithVisibleAndDisabled = Template.bind({})
WithVisibleAndDisabled.args = {
  children: <Button>I'm a button!</Button>,
  displayStateMap: {
    visible: true,
    enabled: false,
  },
}

export const WithVisibleAndEnabled = Template.bind({})
WithVisibleAndEnabled.args = {
  children: <Button>I'm a button!</Button>,
  displayStateMap: {
    visible: true,
    enabled: true,
  },
}

export const WithInvisible = Template.bind({})
WithInvisible.args = {
  children: <Button>I'm a button!</Button>,
  displayStateMap: {
    visible: false,
    enabled: true,
  },
}

export const WithInputVisibleAndDisabled = Template.bind({})
WithInputVisibleAndDisabled.args = {
  children: <Input placeholder="Im a input" onChange={console.log} />,
  displayStateMap: {
    visible: true,
    enabled: false,
  },
}
