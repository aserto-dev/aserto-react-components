import React from 'react';
export declare type RefreshButtonProps = {
    load?: () => void;
    loading?: boolean;
    testId?: string;
};
export declare const RefreshButton: React.FC<RefreshButtonProps>;
