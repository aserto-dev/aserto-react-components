import React from 'react';
export declare type PolicyCardProps = {
    id?: string;
    name?: string;
    repoUrl?: string;
    onClick: () => void;
    onClickRemoveIcon?: () => void;
    testId?: string;
    disabled?: boolean;
    policyIconVariant?: 'pending' | 'error' | 'loaded';
    errors?: Array<string>;
};
export declare const PolicyCard: React.FC<PolicyCardProps>;
