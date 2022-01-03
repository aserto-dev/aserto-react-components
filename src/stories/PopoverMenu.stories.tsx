import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Button } from '../components/Button'
import { PopoverMenu } from '../components/PopoverMenu'
import { Ellipsis } from '../glyphs/Ellipsis'

export default {
  title: 'Common/PopoverMenu',
  component: PopoverMenu,
} as Meta

const Template = () => (
  <PopoverMenu.Container onSelect={(name) => alert(`Clicked item "${name}"`)}>
    <PopoverMenu.Trigger>
      <Button variant="secondary-borderless">
        <Ellipsis />
      </Button>
    </PopoverMenu.Trigger>
    <PopoverMenu>
      <PopoverMenu.Item name="a">A</PopoverMenu.Item>
      <PopoverMenu.Item name="b">B</PopoverMenu.Item>
      <PopoverMenu.Divider />
      <PopoverMenu.Item name="c">C</PopoverMenu.Item>
    </PopoverMenu>
  </PopoverMenu.Container>
)

export const Primary = Template.bind({})
Primary.args = {}
