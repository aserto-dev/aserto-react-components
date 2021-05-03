import React from 'react';
import { InputProps } from '../Input';
export declare type ActionableInputProps = InputProps & {
    onClickCopy?: (value: string) => void;
    shouldShowHideShowButton?: boolean;
    testId?: string;
};
export declare const ActionableInput: React.FC<ActionableInputProps>;
