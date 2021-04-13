import React from 'react';
export declare type ApplicationCardProps = {
    application: string;
    repoUrl?: string;
    onClick: () => void;
    onClickRemoveIcon?: () => void;
};
export declare const ApplicationCard: React.FC<ApplicationCardProps>;
