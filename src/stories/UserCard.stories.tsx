import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {UserCard, UserCardProps} from "../components/UserCard";

export default {
    title: 'Common/UserCard',
    component: UserCard,
} as Meta;

const Template: Story<UserCardProps> = (args) => <UserCard {...args} />;

const user = {
    display_name: "Karin Lamb",
    email: "karinl@acmecorp.com",
    id: "011a88bc-7df9-4d92-ba1f-2ff319e101e1",
    picture: "https://github.com/aserto-demo/contoso-ad-sample/raw/main/UserImages/Karin%20Lamb.jpg"
}

export const Primary = Template.bind({});
Primary.args = {
    user
};