import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { PlayButton, PlayButtonProps } from '../components/PlayButton'

export default {
  title: 'Common/PlayButton',
  component: PlayButton,
} as Meta

const Template: Story<PlayButtonProps> = (args) => <PlayButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  disabled: false
}
