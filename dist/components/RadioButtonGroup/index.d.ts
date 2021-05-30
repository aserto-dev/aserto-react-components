import React from 'react';
interface Option {
    value: string;
    label: string;
    disabled?: boolean;
}
export declare type RadioButtonGroupProps = {
    options: Array<Option>;
    onChange: (val: string) => void;
    defaultSelected?: string;
    label?: string;
    value?: string;
    testId?: string;
};
export declare const RadioButtonGroup: React.FC<RadioButtonGroupProps>;
export {};
