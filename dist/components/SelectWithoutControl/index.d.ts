import React from 'react';
import { Props, SelectInstance, OptionsOrGroups, GroupBase } from 'react-select';
export declare type SelectOption = {
    value: string | number;
    label: string;
    shouldStopPropagation?: boolean;
    onClick?: () => void;
};
export declare type SelectOptions = OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
export declare type ReactSelectElement = SelectInstance<SelectOption>;
export interface SelectWithoutControlProps extends Omit<Props<SelectOption, false>, 'onFocus' | 'onBlur' | 'isDisabled' | 'isClearable' | 'isSearchable' | 'closeMenuOnSelect' | 'menuIsOpen' | 'inputId' | 'styles' | 'formatGroupId' | 'components'> {
    defaultValue?: SelectOption;
    onChange?: (value: SelectOption | null) => void;
    disabled?: boolean;
    label?: string;
    value?: SelectOption | null;
    style?: React.CSSProperties;
    disableLabel?: boolean;
    onClickRemoveTenant: () => void;
    onClickSave: () => void;
    onClickCancel: (firstSelectedOption?: SelectOption) => void;
    shouldDisableOptions?: boolean;
    removeTenantText?: string;
    onBlur?: (firstSelectedOption?: SelectOption) => void;
}
export declare const SelectWithoutControl: React.ForwardRefExoticComponent<SelectWithoutControlProps & React.RefAttributes<ReactSelectElement>>;
