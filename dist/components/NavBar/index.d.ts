import React from 'react';
export declare type NavBarProps = {
    children: React.ReactElement;
    showBrandSeparator?: boolean;
    topPosition?: number;
    expand?: 'sm' | 'md' | 'lg' | 'xl';
    expandBreakpoint?: number;
};
export declare const NavBar: ({ children, showBrandSeparator, topPosition, expand, expandBreakpoint, ...props }: {
    [x: string]: any;
    children: any;
    showBrandSeparator: any;
    topPosition: any;
    expand: any;
    expandBreakpoint: any;
}) => JSX.Element;
