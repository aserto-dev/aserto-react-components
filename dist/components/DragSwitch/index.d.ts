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
    testId?: string;
}
export declare const DragSwitch: ({ className, checked, onChange, onColor, offColor, handleColor, focusShadow, disabled, testId, ...labelProps }: Props) => JSX.Element;
export {};
