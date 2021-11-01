import { _ as __makeTemplateObject, a as __rest, b as __assign } from './_tslib-66d5e02f.js';
import React, { useRef, useLayoutEffect } from 'react';
import Prism from 'prismjs';
import styled, { css } from 'styled-components';
import { t as theme } from './theme-526b9b1f.js';

var HIGHLIGHT_CODE_STYLES = css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  background: none;\n  font-family: 'Ubuntu Mono', monospace;\n  font-size: 14px;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n\n  @media screen and (-ms-high-contrast: active) {\n    color: windowText;\n    background: window;\n  }\n"], ["\n  color: ", ";\n  background: none;\n  font-family: 'Ubuntu Mono', monospace;\n  font-size: 14px;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n\n  @media screen and (-ms-high-contrast: active) {\n    color: windowText;\n    background: window;\n  }\n"])), theme.grey100);
var TOKEN_STYLES = css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #d4d0ab;\n  }\n\n  .token.punctuation {\n    color: #fefefe;\n  }\n\n  .token.property,\n  .token.tag,\n  .token.constant,\n  .token.symbol,\n  .token.deleted {\n    color: #ffa07a;\n  }\n\n  .token.boolean,\n  .token.number {\n    color: #3ecacf;\n  }\n\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #3dd444;\n  }\n\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .language-css .token.string,\n  .style .token.string,\n  .token.variable {\n    color: #3ecacf;\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.function {\n    color: #ffd700;\n  }\n\n  .token.keyword {\n    color: #3ecacf;\n  }\n\n  .token.regex,\n  .token.important {\n    color: #ffd700;\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  @media screen and (-ms-high-contrast: active) {\n    .token.important {\n      background: highlight;\n      color: window;\n      font-weight: normal;\n    }\n\n    .token.atrule,\n    .token.attr-value,\n    .token.function,\n    .token.keyword,\n    .token.operator,\n    .token.selector {\n      font-weight: bold;\n    }\n\n    .token.attr-value,\n    .token.comment,\n    .token.doctype,\n    .token.function,\n    .token.keyword,\n    .token.operator,\n    .token.property,\n    .token.string {\n      color: highlight;\n    }\n\n    .token.attr-value,\n    .token.url {\n      font-weight: normal;\n    }\n  }\n"], ["\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #d4d0ab;\n  }\n\n  .token.punctuation {\n    color: #fefefe;\n  }\n\n  .token.property,\n  .token.tag,\n  .token.constant,\n  .token.symbol,\n  .token.deleted {\n    color: #ffa07a;\n  }\n\n  .token.boolean,\n  .token.number {\n    color: #3ecacf;\n  }\n\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #3dd444;\n  }\n\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .language-css .token.string,\n  .style .token.string,\n  .token.variable {\n    color: #3ecacf;\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.function {\n    color: #ffd700;\n  }\n\n  .token.keyword {\n    color: #3ecacf;\n  }\n\n  .token.regex,\n  .token.important {\n    color: #ffd700;\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  @media screen and (-ms-high-contrast: active) {\n    .token.important {\n      background: highlight;\n      color: window;\n      font-weight: normal;\n    }\n\n    .token.atrule,\n    .token.attr-value,\n    .token.function,\n    .token.keyword,\n    .token.operator,\n    .token.selector {\n      font-weight: bold;\n    }\n\n    .token.attr-value,\n    .token.comment,\n    .token.doctype,\n    .token.function,\n    .token.keyword,\n    .token.operator,\n    .token.property,\n    .token.string {\n      color: highlight;\n    }\n\n    .token.attr-value,\n    .token.url {\n      font-weight: normal;\n    }\n  }\n"])));
var templateObject_1$1, templateObject_2$1;

var StyledCode = styled.code.withConfig({
  displayName: "Highlight__StyledCode",
  componentId: "sc-1khf1k8-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), HIGHLIGHT_CODE_STYLES, TOKEN_STYLES);
var Pre = styled.pre.withConfig({
  displayName: "Highlight__Pre",
  componentId: "sc-1khf1k8-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  overflow: visible;\n  margin: 0;\n"], ["\n  overflow: visible;\n  margin: 0;\n"])));
var Code = function Code(_a) {
  var children = _a.children,
      _b = _a.language,
      language = _b === void 0 ? 'javascript' : _b,
      _c = _a.className,
      className = _c === void 0 ? '' : _c,
      rest = __rest(_a, ["children", "language", "className"]);

  var codeRef = useRef(null);
  useLayoutEffect(function () {
    if (codeRef.current !== null) {
      Prism.highlightElement(codeRef.current);
    }
  }, [children, codeRef]);
  return /*#__PURE__*/React.createElement(StyledCode, __assign({
    ref: codeRef,
    className: "language-" + language + " " + className
  }, rest), children);
};
var Highlight = function Highlight(_a) {
  var language = _a.language,
      children = _a.children,
      rest = __rest(_a, ["language", "children"]);

  return /*#__PURE__*/React.createElement(Pre, __assign({
    tabIndex: -1
  }, rest), /*#__PURE__*/React.createElement(Code, {
    language: language,
    children: children
  }));
};
var templateObject_1, templateObject_2;

export { Code as C, Highlight as H, HIGHLIGHT_CODE_STYLES as a };
