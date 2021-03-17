import { a as __rest, b as __assign } from './_tslib-2598d085.js';
import React from 'react';
import { FormControl } from 'react-bootstrap';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\ntextarea.form-control {\n  background-color: #161719;\n  color: #d7d8d8;\n  border-color: #403f3f;\n  font-family: 'Ubuntu', monospace;\n}\n\n/* focus for textarea */\ntextarea.form-control:focus {\n  background-color: #161719;\n  color: #d7d8d8;\n  outline: none;\n  border-color: #7d7a7a;\n  -webkit-box-shadow: none;\n  box-shadow: none;  \n}";
styleInject(css_248z);

var TextArea = function TextArea(_a) {
  var placeholder = _a.placeholder,
      value = _a.value,
      onChange = _a.onChange,
      rows = _a.rows,
      props = __rest(_a, ["placeholder", "value", "onChange", "rows"]);

  return /*#__PURE__*/React.createElement(FormControl, __assign({
    as: "textarea",
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }, props));
};

export { TextArea as T, styleInject as s };
