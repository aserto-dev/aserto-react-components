import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {PageHeader, PageHeaderProps} from "../components/PageHeader";

export default {
    title: 'Common/PageHeader',
    component: PageHeader,
} as Meta;

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Page title',
};

export const PrimaryWithLoading = Template.bind({});
PrimaryWithLoading.args = {
    title: 'Page title',
    loading: true
};

export const PrimaryWithLoadFunction = Template.bind({});
PrimaryWithLoadFunction.args = {
    title: 'Page title',
    load: console.log
};
