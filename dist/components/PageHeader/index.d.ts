import React from 'react';
export declare type PageHeaderProps = {
    title?: string;
    load?: unknown;
    loading?: boolean;
    hasBorderBottom?: boolean;
    children?: React.ReactElement;
    topPosition?: number;
    id?: string;
    mobileBreakpoint?: number;
};
export declare const PageHeader: React.FC<PageHeaderProps>;
