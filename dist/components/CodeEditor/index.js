import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-66d5e02f.js';
import React, { useCallback } from 'react';
import Editor from 'react-simple-code-editor';
import styled, { css } from 'styled-components';
import { t as theme } from '../../theme-526b9b1f.js';
import { a as HIGHLIGHT_CODE_STYLES, C as Code } from '../../index-c54dd664.js';
import 'prismjs';

var EDITOR_CODE_STYLES = css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  ", ";\n  // Must be consistent with Editor's textarea styles\n  white-space: pre-wrap;\n  word-break: keep-all;\n  overflow-wrap: break-word;\n"], ["\n  ", ";\n  // Must be consistent with Editor's textarea styles\n  white-space: pre-wrap;\n  word-break: keep-all;\n  overflow-wrap: break-word;\n"])), HIGHLIGHT_CODE_STYLES);
var templateObject_1$1;

var StyledEditor = styled(Editor).withConfig({
  displayName: "CodeEditor__StyledEditor",
  componentId: "sc-1txlolx-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), EDITOR_CODE_STYLES);

var StyledClassNameForwarder = function StyledClassNameForwarder(_a) {
  var className = _a.className,
      children = _a.children;
  return children(className);
};

var StyledTextAreaClassNameForwarder = styled(StyledClassNameForwarder).withConfig({
  displayName: "CodeEditor__StyledTextAreaClassNameForwarder",
  componentId: "sc-1txlolx-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 4px;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 1px #7d7a7a;\n    -webkit-box-shadow: 0 0 0 1px #7d7a7a;\n  }\n\n  ", "\n"], ["\n  border-radius: 4px;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 1px #7d7a7a;\n    -webkit-box-shadow: 0 0 0 1px #7d7a7a;\n  }\n\n  ", "\n"])), function (_a) {
  var state = _a.state;

  if (state === 'error') {
    return "\n        box-shadow: 0 0 0 1px " + theme.mojoAccent3 + ";\n        -webkit-box-shadow: 0 0 0 1px " + theme.mojoAccent3 + ";\n\n        &:focus {\n          box-shadow: 0 0 0 1px " + theme.mojoAccent3 + ";\n          -webkit-box-shadow: 0 0 0 1px " + theme.mojoAccent3 + ";  \n        }\n      ";
  }
});
var StyledCode = styled(Code).withConfig({
  displayName: "CodeEditor__StyledCode",
  componentId: "sc-1txlolx-2"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), EDITOR_CODE_STYLES);
var CodeEditor = function CodeEditor(_a) {
  var value = _a.value,
      onChange = _a.onChange,
      language = _a.language,
      state = _a.state,
      rest = __rest(_a, ["value", "onChange", "language", "state"]);

  var highlight = useCallback(function (code) {
    // The size of the container is determined by the size of the code element, which
    // allows the textarea to grow to fill the height of the container. When adding
    // empty new lines, the code element will not grow so there is not enough space
    // for the new line to render in the textarea, which causes the textarea to scroll
    // and have its position become out of sync with the code element. Adding an extra
    // newline will force the code element to grow.
    if (code.endsWith('\n')) {
      code = code + '\n';
    }

    return /*#__PURE__*/React.createElement(StyledCode, {
      language: language
    }, code);
  }, [language]);
  return /*#__PURE__*/React.createElement(StyledTextAreaClassNameForwarder, {
    state: state
  }, function (textareaClassName) {
    return (
      /*#__PURE__*/
      // @ts-expect-error Broken `react-simple-code-editor` types
      React.createElement(StyledEditor, __assign({
        value: value,
        onValueChange: onChange,
        highlight: highlight,
        padding: 10,
        tabSize: 4,
        style: {
          overflow: 'visible'
        },
        textareaClassName: textareaClassName
      }, rest))
    );
  });
};
var templateObject_1, templateObject_2, templateObject_3;

export { CodeEditor };
