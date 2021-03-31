import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Pagination, PaginationProps } from '../components/Pagination'

export default {
  title: 'Common/Pagination',
  component: Pagination,
} as Meta

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />

export const PrimaryWithStartAndEndPage = Template.bind({})
PrimaryWithStartAndEndPage.args = {
  startPage: 8,
  endPage: 12,
  currentPage: 22,
  showFirstAndLastButtons: true,
}

export const PrimaryWithPrevNext = Template.bind({})
PrimaryWithPrevNext.args = {
  startPage: 20,
  endPage: 24,
  currentPage: 22,
  showPrevNextButtons: true,
}
