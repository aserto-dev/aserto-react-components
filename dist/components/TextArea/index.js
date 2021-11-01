import { a as __rest, b as __assign } from '../../_tslib-66d5e02f.js';
import React from 'react';
import { FormControl } from 'react-bootstrap';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';

var css_248z = "\ntextarea.form-control {\n  background-color: #161719;\n  color: #d7d8d8;\n  border-color: #595959;\n  font-family: 'Ubuntu', monospace;\n}\n\n/* focus for textarea */\ntextarea.form-control:focus {\n  background-color: #161719;\n  color: #d7d8d8;\n  outline: none;\n  border-color: #7d7a7a;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}";
styleInject(css_248z);

var TextArea = function TextArea(_a) {
  var value = _a.value,
      onChange = _a.onChange,
      style = _a.style,
      props = __rest(_a, ["value", "onChange", "style"]);

  return /*#__PURE__*/React.createElement(FormControl, __assign({
    as: "textarea",
    value: value,
    onChange: onChange,
    style: style
  }, props));
};

export { TextArea };
