import React from 'react';
export declare type SelectOption = {
    value: string | number;
    label: string;
};
export declare type SelectProps = {
    options: Array<SelectOption>;
    defaultValue?: SelectOption;
    onChange: (e: any) => void;
    disabled?: boolean;
    label?: string;
    isLoading?: boolean;
    value?: SelectOption | null;
    ref?: any;
    style?: any;
    disableLabel?: boolean;
};
export declare const Select: React.ForwardRefExoticComponent<Pick<SelectProps, "options" | "defaultValue" | "onChange" | "label" | "disabled" | "isLoading" | "style" | "value" | "disableLabel"> & React.RefAttributes<any>>;
