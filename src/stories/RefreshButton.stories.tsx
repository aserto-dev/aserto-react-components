import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { RefreshButton } from '../components/RefreshButton'

export default {
  title: 'Common/RefreshButton',
  component: RefreshButton,
} as Meta

const Template: Story<any> = (args) => <RefreshButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'RefreshButton',
}
export const PrimaryWithLoading = Template.bind({})
PrimaryWithLoading.args = {
  variant: 'primary',
  children: 'RefreshButton',
  loading: true,
  load: () => console.log,
}
