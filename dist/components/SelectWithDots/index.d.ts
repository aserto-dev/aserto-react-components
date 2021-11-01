import React from 'react';
import { GroupBase, OptionsOrGroups, Props, SelectInstance } from 'react-select';
declare type MenuAlignment = 'bottom-left' | 'bottom-right' | 'right-bottom' | 'right-top';
export declare type SelectOption = {
    value: string | number;
    label: string;
    shouldStopPropagation?: boolean;
    onClick?: () => void;
    isDisabled?: boolean;
};
export declare type SelectOptions = OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
export declare type ReactSelectElement = SelectInstance<SelectOption>;
export interface SelectWithDotsProps extends Omit<Props<SelectOption, false>, 'onFocus' | 'onBlur' | 'isDisabled' | 'isClearable' | 'isSearchable' | 'closeMenuOnSelect' | 'menuIsOpen' | 'inputId' | 'formatGroupId' | 'value'> {
    defaultValue?: SelectOption;
    onChange?: (value: SelectOption) => void;
    disabled?: boolean;
    label?: string;
    style?: React.CSSProperties;
    disableLabel?: boolean;
    shouldDisableOptions?: boolean;
    onBlur?: (firstSelectedOption?: SelectOption) => void;
    menuAlignment?: MenuAlignment;
}
export declare const SelectWithDots: React.ForwardRefExoticComponent<SelectWithDotsProps & React.RefAttributes<ReactSelectElement>>;
export {};
