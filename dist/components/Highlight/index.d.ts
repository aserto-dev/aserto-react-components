import React from 'react';
export declare type SupportedLanguage = 'rego' | 'javascript' | 'typescript';
interface CodeProps extends React.ComponentPropsWithoutRef<'code'> {
    language?: SupportedLanguage;
}
export declare const Code: React.FC<CodeProps>;
interface HighlightProps extends React.ComponentPropsWithoutRef<'pre'> {
    language?: SupportedLanguage;
}
export declare const Highlight: React.FC<HighlightProps>;
export {};
