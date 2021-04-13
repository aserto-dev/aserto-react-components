/// <reference types="react" />
import './styles.css';
interface Props {
    className?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    onColor?: string;
    offColor?: string;
    handleColor?: string;
    focusShadow?: string;
    disabled?: boolean;
    [props: string]: any;
}
export declare const DragSwitch: ({ className, checked, onChange, onColor, offColor, handleColor, focusShadow, disabled, ...labelProps }: Props) => JSX.Element;
export {};
