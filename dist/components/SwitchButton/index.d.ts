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
};
export declare const SwitchButton: ({ className, checked, onChange, onColor, offColor, handleColor, focusShadow, disabled, ...labelProps }: SwitchButtonProps) => JSX.Element;
