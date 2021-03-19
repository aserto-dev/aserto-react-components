import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Spinner } from '../components/Spinner'

export default {
  title: 'Common/Spinner',
  component: Spinner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<any> = (args) => <Spinner {...args} />

export const Primary = Template.bind({})
Primary.args = {}
