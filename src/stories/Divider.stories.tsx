import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import { Divider, DividerProps } from '../components/Divider';

export default {
    title: 'Common/Divider',
    component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
