import React from 'react';
export declare type DisplayState = Readonly<{
    [key: string]: string | boolean;
}>;
export declare const EvaluateDisplayState: React.MemoExoticComponent<({ children, displayState, }: {
    children: React.ReactElement;
    displayState: DisplayState;
}) => JSX.Element>;
