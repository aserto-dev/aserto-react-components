import { Component } from 'react';
import './aserto-custom.css';
interface State {
    loaded: boolean;
}
export declare type HighlightProps = {
    language?: string;
    children: any;
    style?: any;
};
export declare class Highlight extends Component<HighlightProps, State> {
    private codeNode;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    highlight: () => void;
    render(): JSX.Element;
}
export {};
