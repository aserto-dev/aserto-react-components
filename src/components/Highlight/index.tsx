import React, {Component} from "react";

import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

const registeredLanguages = {};

interface State {
  loaded: boolean
}

export type HighlightProps = {
  language?: string
  children: any,
  style?: any
}

export class Highlight extends Component<HighlightProps, State> {
  private codeNode: React.RefObject<HTMLElement>;
  constructor(props) {
    super(props);

    this.state = { loaded: false };
    this.codeNode = React.createRef();
  }

  componentDidMount() {
    const { language } = this.props;

    if (language && !registeredLanguages[language]) {
      try {
        const newLanguage = require(`highlight.js/lib/languages/${language}`);
        hljs.registerLanguage(language, newLanguage);
        registeredLanguages[language] = true;

        this.setState({ loaded: true }, this.highlight);
      } catch (e) {
        console.error(e);
        throw Error(`Cannot register the language ${language}`);
      }
    } else {
      this.setState({ loaded: true });
    }
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight = () => {
    this.codeNode &&
      this.codeNode.current &&
      hljs.highlightBlock(this.codeNode.current as HTMLElement);
  };

  render() {
    const { language, children, style } = this.props;
    const { loaded } = this.state;

    if (!loaded) {
      return null;
    }

    return (
      <pre className="rounded">
        <code ref={this.codeNode} className={language}
        style={{
          ...style, 
          backgroundColor: '#161719',
          fontSize: 16
        }}>
          {children}
        </code>
      </pre>
    );
  }
}

