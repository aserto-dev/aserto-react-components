import React from 'react';
export { DEFAULT_EXPANSION_BREAKPOINT, NavBarPixelHeight } from './styles';
export declare type NavBarProps = {
    children?: React.ReactNode;
    logo?: React.ReactNode;
    uncollapsableContent?: React.ReactNode;
    showBrandSeparator?: boolean;
    topPosition?: number;
    expand?: 'sm' | 'md' | 'lg' | 'xl';
    expandBreakpoint?: number;
    testId?: string;
};
export declare const NavBar: React.FC<NavBarProps>;
