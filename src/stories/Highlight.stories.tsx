import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Highlight, HighlightProps } from '../components/Highlight'

export default {
  title: 'Common/Highlight',
  component: Highlight,
} as Meta

const Template: Story<HighlightProps> = (args) => <Highlight {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children:
    'package peoplefinder.DELETE.api.users.__id\n' +
    '\n' +
    'default allowed = false\n' +
    '\n' +
    'default visible = false\n' +
    '\n' +
    'default enabled = false\n' +
    '\n' +
    'allowed {\n' +
    '\tu = input.user\n' +
    '\tu.attr.department == "Operations"\n' +
    '\tu.attr.title == "IT Manager"\n' +
    '}\n' +
    '\n' +
    'visible {\n' +
    '\tu = input.user\n' +
    '\tu.attr.department == "Operations"\n' +
    '}\n' +
    '\n' +
    'enabled {\n' +
    '\tallowed\n' +
    '}',
}
