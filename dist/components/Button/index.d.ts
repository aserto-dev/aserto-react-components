import React from 'react';
import { ButtonProps as BootstrapButtonProps } from 'react-bootstrap';
export interface ButtonProps extends BootstrapButtonProps {
    variant?: 'primary' | 'secondary';
}
export declare const Button: React.FC<ButtonProps>;
