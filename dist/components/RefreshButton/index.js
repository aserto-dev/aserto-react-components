import React from 'react';
import Button from '../Button/index.js';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';
import '@babel/runtime/helpers/extends';
import 'react-bootstrap';

var css_248z = "button.refresh-button, \nbutton.refresh-button:focus, \nbutton.refresh-button:active, \nbutton.refresh-button:visited {\n  position: absolute;\n  right: 20px;  \n  width: 92px;\n  height: 36px;\n  border: 1px solid #35393d;\n  border-radius: 4px;\n  background-color: #35393d66;\n  background-size: cover;\n  font-family: Roboto;\n  font-size: 14px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);\n  text-align: center;\n  box-shadow: none;\n  outline: none;\n}\n\nbutton.refresh-button:hover {\n  background-color: #35393d;\n  border: 1px solid #35393d;\n}\n";
styleInject(css_248z);

var RefreshButton = function RefreshButton(_ref) {
  var load = _ref.load,
      loading = _ref.loading;
  return /*#__PURE__*/React.createElement(Button, {
    className: "refresh-button btn-secondary",
    onClick: load
  }, /*#__PURE__*/React.createElement("i", {
    className: loading ? "fa fa-spinner" : "fa fa-refresh"
  }), "\xA0Refresh");
};

export default RefreshButton;
