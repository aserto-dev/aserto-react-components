import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { RequestEditor } from '../components/RequestEditor'

export default {
  title: 'Common/RequestEditor',
  component: RequestEditor,
} as Meta

const Template: Story<any> = (args) => <RequestEditor {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'RequestEditor',
}
