import React from 'react';
export declare type BreadcrumbProps = {
    title: string;
    usePathAsBreadcrumb?: boolean;
    breadcrumbText?: string;
    breadcrumbUrl?: string;
    testId?: string;
};
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
