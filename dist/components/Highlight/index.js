import { c as __extends, b as __assign } from '../../_tslib-2598d085.js';
import React, { Component } from 'react';
import hljs from 'highlight.js';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';

var css_248z = ".hljs {\n  display: block;\n  font-family: 'Ubuntu', monospace;\n  font-size: 18px !important;\n  letter-spacing: 0;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #121212 !important;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-section,\n.hljs-link {\n  color: #277F82;\n}\n\n.hljs-function .hljs-keyword {\n  color: #E7E7E7;\n}\n\n.hljs,\n.hljs-subst {\n  color: #E7E7E7;\n}\n\n.hljs-string,\n.hljs-title,\n.hljs-name,\n.hljs-type,\n.hljs-attribute,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-tag,\n.hljs-template-variable {\n  color: #d36363;\n}\n\n.hljs-comment,\n.hljs-quote,\n.hljs-deletion,\n.hljs-meta {\n  color: #896cc2;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-literal,\n.hljs-title,\n.hljs-section,\n.hljs-doctag,\n.hljs-type,\n.hljs-name,\n.hljs-strong {\n  font-weight: bold;\n}";
styleInject(css_248z);

var registeredLanguages = {};

var Highlight =
/** @class */
function (_super) {
  __extends(Highlight, _super);

  function Highlight(props) {
    var _this = _super.call(this, props) || this;

    _this.highlight = function () {
      _this.codeNode && _this.codeNode.current && hljs.highlightBlock(_this.codeNode.current);
    };

    _this.state = {
      loaded: false
    };
    _this.codeNode = /*#__PURE__*/React.createRef();
    return _this;
  }

  Highlight.prototype.componentDidMount = function () {
    var language = this.props.language;

    if (language && !registeredLanguages[language]) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        var newLanguage = require("highlight.js/lib/languages/" + language);

        hljs.registerLanguage(language, newLanguage);
        registeredLanguages[language] = true;
        this.setState({
          loaded: true
        }, this.highlight);
      } catch (e) {
        console.error(e);
        throw Error("Cannot register the language " + language);
      }
    } else {
      this.setState({
        loaded: true
      });
    }
  };

  Highlight.prototype.componentDidUpdate = function () {
    this.highlight();
  };

  Highlight.prototype.render = function () {
    var _a = this.props,
        language = _a.language,
        children = _a.children,
        style = _a.style;
    var loaded = this.state.loaded;

    if (!loaded) {
      return null;
    }

    return /*#__PURE__*/React.createElement("pre", {
      className: "rounded"
    }, /*#__PURE__*/React.createElement("code", {
      ref: this.codeNode,
      className: language,
      style: __assign(__assign({}, style), {
        backgroundColor: '#161719',
        fontSize: 16
      })
    }, children));
  };

  return Highlight;
}(Component);

export { Highlight };
