import React from 'react';
import { GroupBase, OptionsOrGroups, Props, SelectInstance } from 'react-select';
export declare type SelectOption = {
    value: string | number;
    label: string;
    shouldStopPropagation?: boolean;
    onClick?: () => void;
};
export declare type SelectOptions = OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
export declare type ReactSelectElement = SelectInstance<SelectOption>;
export interface SelectProps extends Omit<Props<SelectOption, false>, 'isDisabled' | 'inputId' | 'styles' | 'formatGroupId' | 'components'> {
    defaultValue?: SelectOption;
    disabled?: boolean;
    label?: string;
    value?: SelectOption | null;
    style?: React.CSSProperties;
    disableLabel?: boolean;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<ReactSelectElement>>;
