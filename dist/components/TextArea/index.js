import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React from 'react';
import { FormControl } from 'react-bootstrap';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';

var css_248z = "\ntextarea.form-control {\n  background-color: #161719;\n  color: #d7d8d8;\n  border-color: #403f3f;\n  font-family: 'Ubuntu', monospace;\n}\n\n/* focus for textarea */\ntextarea.form-control:focus {\n  background-color: #161719;\n  color: #d7d8d8;\n  outline: none;\n  border-color: #7d7a7a;\n  -webkit-box-shadow: none;\n  box-shadow: none;  \n}";
styleInject(css_248z);

var TextArea = function TextArea(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onChange = _ref.onChange,
      rows = _ref.rows,
      props = _objectWithoutProperties(_ref, ["placeholder", "value", "onChange", "rows"]);

  return /*#__PURE__*/React.createElement(FormControl, _extends({
    as: "textarea",
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }, props));
};

export default TextArea;
