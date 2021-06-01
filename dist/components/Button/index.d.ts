import React from 'react';
declare type Modify<T, R> = Omit<T, keyof R> & R;
declare type DefaultButtonProps = Modify<React.HTMLProps<HTMLButtonElement>, {
    size?: string;
    block?: boolean;
}>;
export interface ButtonProps extends DefaultButtonProps {
    variant?: 'primary' | 'secondary' | 'danger' | 'secondary-borderless';
}
export declare const Button: React.FC<ButtonProps>;
export {};
