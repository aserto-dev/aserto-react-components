import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Pagination, PaginationProps } from '../components/Pagination'

export default {
  title: 'Common/Pagination',
  component: Pagination,
} as Meta

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />

export const Primary = Template.bind({})
Primary.args = {}
