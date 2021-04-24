import React from 'react';
export declare type ApplicationCardProps = {
    id?: string;
    name?: string;
    repoUrl?: string;
    onClick: () => void;
    onClickRemoveIcon?: () => void;
    testId?: string;
};
export declare const ApplicationCard: React.FC<ApplicationCardProps>;
