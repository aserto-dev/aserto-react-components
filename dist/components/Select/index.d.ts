import React from 'react';
export declare type SelectOption = {
    value: string | number;
    label: string;
    shouldStopPropagation?: string;
    onClick?: () => void;
};
export declare type SelectProps = {
    options: Array<SelectOption>;
    defaultValue?: SelectOption;
    onChange: (e: any) => void;
    disabled?: boolean;
    label?: string;
    isLoading?: boolean;
    value?: SelectOption | null;
    style?: any;
    disableLabel?: boolean;
    name?: string;
};
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<any>>;
