import React from 'react';
export declare type PageHeaderProps = {
    title?: string;
    load?: () => void;
    loading?: boolean;
    hasBorderBottom?: boolean;
    children?: React.ReactElement;
    topPosition?: number;
    id?: string;
    mobileBreakpoint?: number;
    testId?: string;
};
export declare const PageHeader: React.FC<PageHeaderProps>;
