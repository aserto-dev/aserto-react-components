import React from 'react';
export declare type NavBarProps = {
    children: React.ReactElement;
    uncollapsableContent?: React.ReactElement | string;
    showBrandSeparator?: boolean;
    topPosition?: number;
    expand?: 'sm' | 'md' | 'lg' | 'xl';
    expandBreakpoint?: number;
    testId?: string;
};
export declare const NavBar: React.FC<NavBarProps>;
