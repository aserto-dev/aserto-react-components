import React from 'react';
export declare type SelectOption = {
    value: string | number;
    label: string;
};
export declare type SelectProps = {
    options: Array<SelectOption>;
    defaultValue?: string;
    onChange: (e: any) => void;
    disabled?: boolean;
    label?: string;
    isLoading?: boolean;
    ref?: any;
    style?: any;
};
export declare const Select: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<SelectProps>>;
