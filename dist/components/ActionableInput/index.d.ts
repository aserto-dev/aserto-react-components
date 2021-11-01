import React from 'react';
import { InputProps } from '../Input';
export declare type ActionableInputProps = InputProps & {
    onClickCopy?: (value: string) => void;
    shouldShowHideShowButton?: boolean;
    testId?: string;
    onClickRotateModal?: (value: string) => void;
};
export declare const ActionableInput: React.FC<ActionableInputProps>;
