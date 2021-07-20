import React from 'react';
import './TextArea.css';
export declare type TextAreaProps = {
    placeholder: string;
    value: string | number;
    onChange: () => void;
    rows: number;
};
export declare const TextArea: React.FC<TextAreaProps>;
