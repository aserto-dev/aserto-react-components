import React from 'react';
export declare type SelectOption = {
    value: string | number;
    label: string;
    shouldStopPropagation?: string;
    onClick?: () => void;
};
export declare type SelectWithoutControlProps = {
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
    onClickRemoveTenant: () => void;
    onClickSave: () => void;
    onClickCancel: (firstSelectedOption?: SelectOption) => void;
    menuIsOpen?: boolean;
    shouldDisabledOptions?: boolean;
    removeTenantText?: string;
};
export declare const SelectWithoutControl: React.ForwardRefExoticComponent<SelectWithoutControlProps & React.RefAttributes<any>>;
