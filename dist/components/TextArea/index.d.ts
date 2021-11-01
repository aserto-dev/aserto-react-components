import React from 'react';
import { FormControlProps } from 'react-bootstrap';
import './TextArea.css';
export declare type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    value: string | number;
    onChange?: FormControlProps['onChange'];
    style?: unknown;
};
export declare const TextArea: React.FC<TextAreaProps>;
