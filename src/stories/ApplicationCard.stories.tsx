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
  application: 'proplefinder',
}

export const PrimaryWithRepoUrl = Template.bind({})
PrimaryWithRepoUrl.args = {
  application: 'proplefinder',
  repoUrl: 'github.com/acmetech/repo1',
}
