import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Breadcrumb, BreadcrumbProps } from '../components/Breadcrumb'

export default {
  title: 'Common/Breadcrumb',
  component: Breadcrumb,
} as Meta

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Applications',
}

export const WithUsePathAsBreadcrumb = Template.bind({})
WithUsePathAsBreadcrumb.args = {
  usePathAsBreadcrumb: true,
}

export const WithBreadcrumbTextAndURL = Template.bind({})
WithBreadcrumbTextAndURL.args = {
  breadcrumbText: 'Applications',
  breadcrumbUrl: '/',
}
