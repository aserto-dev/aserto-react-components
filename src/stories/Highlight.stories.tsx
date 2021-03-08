import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Highlight, HighlightProps } from '../components/Highlight'

export default {
  title: 'Common/Highlight',
  component: Highlight,
} as Meta

const Template: Story<HighlightProps> = (args) => <Highlight {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'JWT',
}
