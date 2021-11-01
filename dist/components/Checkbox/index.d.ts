import React from 'react';
export interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'type'> {
    onChange?: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
}
export declare const Checkbox: React.FC<CheckboxProps>;
