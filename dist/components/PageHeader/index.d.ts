import React from 'react';
export declare type PageHeaderProps = {
    title?: string;
    subtitle?: React.ReactNode | string;
    load?: () => void;
    loading?: boolean;
    hasBorderBottom?: boolean;
    children?: React.ReactNode;
    topPosition?: number;
    id?: string;
    mobileBreakpoint?: number;
    testId?: string;
};
export declare const PageHeader: React.FC<PageHeaderProps>;
