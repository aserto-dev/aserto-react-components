import React from 'react';
interface User {
    display_name: string;
    email: string;
    id: string;
    picture: string;
}
export declare type UserCardProps = {
    user: User;
    onClick: () => void;
    disabled?: boolean;
    testId?: string;
};
export declare const UserCard: React.FC<UserCardProps>;
export {};
