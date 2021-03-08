import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { Button as Button$1 } from 'react-bootstrap';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';

var css_248z = "button.aserto-button, \nbutton.aserto-button:focus, \nbutton.aserto-button:active, \nbutton.aserto-button:visited {\n  border: 1px solid #35393d;\n  border-radius: 4px;\n  background-color: #35393d66;\n  background-size: cover;\n  font-family: Roboto;\n  font-size: 14px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);\n  text-align: center;\n  box-shadow: none;\n  outline: none;\n}\n\nbutton.aserto-button:hover {\n  background-color: #35393d;\n  border: 1px solid #35393d;\n}\n";
styleInject(css_248z);

var Button = function Button(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(Button$1, _extends({
    className: "aserto-button btn-secondary"
  }, props));
};

export default Button;
