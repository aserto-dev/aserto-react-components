import { _ as __makeTemplateObject } from '../../_tslib-2598d085.js';
import React from 'react';
import { Y as Ye } from '../../styled-components.esm-33dbba00.js';
import { Button } from '../Button/index.js';
import 'react-bootstrap';
import '../../theme-526b9b1f.js';

var RefreshButtonContainer = Ye(Button).withConfig({
  displayName: "RefreshButton__RefreshButtonContainer",
  componentId: "sc-1w68zc8-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  right: 20px;\n  width: 92px;\n  height: 36px;\n  border: 1px solid #35393d;\n  border-radius: 4px;\n  background-color: #35393d66;\n  background-size: cover;\n  font-size: 14px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: none;\n  outline: none;\n"], ["\n  position: absolute;\n  right: 20px;\n  width: 92px;\n  height: 36px;\n  border: 1px solid #35393d;\n  border-radius: 4px;\n  background-color: #35393d66;\n  background-size: cover;\n  font-size: 14px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: none;\n  outline: none;\n"])));
var RefreshButton = function RefreshButton(_a) {
  var load = _a.load,
      loading = _a.loading;
  return /*#__PURE__*/React.createElement(RefreshButtonContainer, {
    variant: "secondary",
    onClick: load
  }, /*#__PURE__*/React.createElement("i", {
    className: loading ? 'fa fa-spinner' : 'fa fa-refresh'
  }), "\xA0Refresh");
};
var templateObject_1;

export { RefreshButton };
