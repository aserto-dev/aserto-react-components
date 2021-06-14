import React from 'react';
export declare type InputProps = {
    placeholder?: string;
    value?: string | number;
    onChange: (e: any) => void;
    label?: string;
    info?: string;
    error?: string;
    isValid?: boolean;
    isUnavailable?: boolean;
    disabled?: boolean;
    type?: 'text' | 'number' | 'password' | 'email' | string | null;
    style?: any;
    hasSmallLabel?: boolean;
};
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<any>>;
