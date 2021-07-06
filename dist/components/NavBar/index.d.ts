import React from 'react';
import './style.css';
export declare type NavBarProps = {
    children: React.ReactElement;
    uncollapsableContent?: React.ReactElement | string;
    showBrandSeparator?: boolean;
    topPosition?: number;
    expand?: 'sm' | 'md' | 'lg' | 'xl';
    expandBreakpoint?: number;
    user?: any;
    testId?: string;
};
export declare const NavBar: React.FC<NavBarProps>;
export declare const NavItemWithDropdown: ({ link, id }: {
    link: any;
    id: any;
}) => JSX.Element;
