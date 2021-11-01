import React from 'react';
import { User } from '../../types';
export declare type UserCardProps = {
    user: User;
    onClick: () => void;
    disabled?: boolean;
    testId?: string;
};
export declare const UserCard: React.FC<UserCardProps>;
