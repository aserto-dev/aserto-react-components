import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ApplicationCard, ApplicationCardProps } from '../components/ApplicationCard'

export default {
  title: 'Common/ApplicationCard',
  component: ApplicationCard,
} as Meta

const Template: Story<ApplicationCardProps> = (args) => <ApplicationCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'proplefinder',
}

export const PrimaryWithRepoUrl = Template.bind({})
PrimaryWithRepoUrl.args = {
  name: 'proplefinder',
  repoUrl: 'https://github.com/aserto-demo/peoplefinder',
}

export const PrimaryWithRepoUrlDisabled = Template.bind({})
PrimaryWithRepoUrlDisabled.args = {
  name: 'proplefinder',
  repoUrl: 'https://github.com/aserto-demo/peoplefinder',
  disabled: true,
}
