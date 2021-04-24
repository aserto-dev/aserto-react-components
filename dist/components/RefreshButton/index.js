import { _ as __makeTemplateObject, b as __assign } from '../../_tslib-49c9bcfb.js';
import React from 'react';
import { Y as Ye } from '../../styled-components.esm-7d3bd1b9.js';
import { t as theme } from '../../theme-526b9b1f.js';
import { Button } from '../Button/index.js';
import { m as mapTestIdToProps } from '../../utils-f85fb3a8.js';
import 'react-bootstrap';

var RefreshButtonContainer = Ye(Button).withConfig({
  displayName: "RefreshButton__RefreshButtonContainer",
  componentId: "sc-1w68zc8-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  right: 20px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background-color: ", ";\n  background-size: cover;\n  font-size: 14px;\n  color: ", ";\n  text-align: center;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: none;\n  outline: none;\n  i {\n    margin-right: 4px;\n  }\n  @media (max-width: 600px) {\n    width: auto;\n    i {\n      margin: auto;\n    }\n    span {\n      display: none;\n    }\n  }\n"], ["\n  position: absolute;\n  right: 20px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background-color: ", ";\n  background-size: cover;\n  font-size: 14px;\n  color: ", ";\n  text-align: center;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: none;\n  outline: none;\n  i {\n    margin-right: 4px;\n  }\n  @media (max-width: 600px) {\n    width: auto;\n    i {\n      margin: auto;\n    }\n    span {\n      display: none;\n    }\n  }\n"])), theme.grey, theme.grey20, theme.grey100);
var RefreshButton = function RefreshButton(_a) {
  var load = _a.load,
      loading = _a.loading,
      testId = _a.testId;
  return /*#__PURE__*/React.createElement(RefreshButtonContainer, __assign({}, mapTestIdToProps(testId), {
    variant: "secondary",
    onClick: load
  }), /*#__PURE__*/React.createElement("i", {
    className: loading ? 'fa fa-spinner' : 'fa fa-refresh'
  }), /*#__PURE__*/React.createElement("span", null, "\xA0Refresh"));
};
var templateObject_1;

export { RefreshButton };
