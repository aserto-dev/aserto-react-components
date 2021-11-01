import React from 'react';
import { ButtonProps as BootstrapButtonProps } from 'react-bootstrap';
export declare type DisplayState = {
    visible?: boolean;
    enabled?: boolean;
};
export interface ButtonProps extends BootstrapButtonProps {
    variant?: 'primary' | 'secondary' | 'danger' | 'secondary-borderless';
    displayState?: DisplayState;
}
export declare const Button: React.FC<ButtonProps>;
