import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { PageHeader, PageHeaderProps } from '../components/PageHeader'
import { Breadcrumb } from '../components/Breadcrumb'

export default {
  title: 'Common/PageHeader',
  component: PageHeader,
} as Meta

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Page title',
}

export const PrimaryWithSubtitle = Template.bind({})
PrimaryWithSubtitle.args = {
  title: 'Page title',
  subtitle: 'Tenant ID',
}

export const PrimaryWithSubtitleAsReactComponent = Template.bind({})
PrimaryWithSubtitleAsReactComponent.args = {
  title: 'Page title',
  subtitle: <div>Hey!</div>,
}

export const PrimaryWithLoading = Template.bind({})
PrimaryWithLoading.args = {
  title: 'Page title',
  loading: true,
}

export const PrimaryWithLoadFunction = Template.bind({})
PrimaryWithLoadFunction.args = {
  title: 'Page title',
  load: console.log,
}

export const PrimaryWithBreadcrumb = Template.bind({})
PrimaryWithBreadcrumb.args = {
  children: (
    <Breadcrumb breadcrumbText="Applications" title="Create application" breadcrumbUrl="/" />
  ),
}
