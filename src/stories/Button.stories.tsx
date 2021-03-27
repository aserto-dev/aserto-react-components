import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '../components/Button'

export default {
  title: 'Common/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Button',
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  variant: 'primary',
  children: 'Button',
  disabled: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Button',
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
  variant: 'secondary',
  children: 'Button',
  disabled: true,
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  children: 'Button',
}

export const DangerDisabled = Template.bind({})
DangerDisabled.args = {
  variant: 'danger',
  children: 'Button',
  disabled: true,
}

export const SecondaryBorderless = Template.bind({})
SecondaryBorderless.args = {
  variant: 'secondary-borderless',
  children: 'Button',
}

export const SecondaryBorderlessDisabled = Template.bind({})
SecondaryBorderlessDisabled.args = {
  variant: 'secondary-borderless',
  children: 'Button',
  disabled: true,
}
