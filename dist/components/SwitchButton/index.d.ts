/// <reference types="react" />
export declare type SwitchButtonProps = {
    className?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    onColor?: string;
    offColor?: string;
    handleColor?: string;
    focusShadow?: string;
    disabled?: boolean;
    [props: string]: any;
    testId?: string;
};
export declare const SwitchButton: ({ className, checked, onChange, onColor, offColor, handleColor, focusShadow, disabled, testId, ...labelProps }: SwitchButtonProps) => JSX.Element;
