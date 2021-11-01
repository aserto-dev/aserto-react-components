import React from 'react';
import { SupportedLanguage } from '../Highlight';
declare type State = 'error';
declare type TextAreaProps = Pick<React.ComponentPropsWithoutRef<'textarea'>, 'autoFocus' | 'className' | 'style' | 'disabled' | 'form' | 'maxLength' | 'minLength' | 'name' | 'placeholder' | 'readOnly' | 'required' | 'onClick' | 'onFocus' | 'onBlur' | 'onKeyUp' | 'onKeyDown'>;
export interface CodeEditorProps extends TextAreaProps {
    value: string;
    onChange: (value: string) => void;
    language: SupportedLanguage;
    state?: State;
}
export declare const CodeEditor: ({ value, onChange, language, state, ...rest }: CodeEditorProps) => JSX.Element;
export {};
