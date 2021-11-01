import React from 'react';
declare const SwitchLabel: import("styled-components").StyledComponent<"label", any, {}, never>;
export interface SwitchButtonProps extends Omit<React.ComponentPropsWithoutRef<typeof SwitchLabel>, 'onChange'> {
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
export declare const SwitchButton: ({ className, checked, onChange, onColor, offColor, handleColor, focusShadow, disabled, testId, ...labelProps }: SwitchButtonProps) => JSX.Element;
export {};
