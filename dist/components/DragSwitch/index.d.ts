import React from 'react';
import './styles.css';
interface Props extends Omit<React.ComponentProps<'label'>, 'onChange'> {
    className?: string;
    checked: boolean;
    onChange?: (checked: boolean) => void;
    onColor?: string;
    offColor?: string;
    handleColor?: string;
    focusShadow?: string;
    disabled?: boolean;
    testId?: string;
}
export declare const DragSwitch: ({ className, checked, onChange, onColor, offColor, handleColor, focusShadow, disabled, testId, ...labelProps }: Props) => JSX.Element;
export {};
