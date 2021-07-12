import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { PolicyCard, PolicyCardProps } from '../components/PolicyCard'

export default {
  title: 'Common/PolicyCard',
  component: PolicyCard,
} as Meta

const Template: Story<PolicyCardProps> = (args) => <PolicyCard {...args} />

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

export const PrimaryWithRepoUrlPending = Template.bind({})
PrimaryWithRepoUrlPending.args = {
  name: 'proplefinder',
  policyIconVariant: 'pending',
  repoUrl: 'https://github.com/aserto-demo/peoplefinder',
  disabled: true,
}

export const PrimaryWithRepoUrlError = Template.bind({})
PrimaryWithRepoUrlError.args = {
  name: 'proplefinder',
  policyIconVariant: 'error',
  repoUrl: 'https://github.com/aserto-demo/peoplefinder',
  disabled: true,
  errors: [
    'bundle error: detected overlapping roots in bundle manifest with: [4d717b7a-a908-11eb-be06-01786fee1845]',
    'bundle has never been activated',
  ],
}
export const PrimaryWithHugeRepoUrl = Template.bind({})
PrimaryWithHugeRepoUrl.args = {
  name: 'proplefinder',
  repoUrl: 'https://github.com/aserto-demo/peoplefinderonasertodemotemplatehudename',
}
