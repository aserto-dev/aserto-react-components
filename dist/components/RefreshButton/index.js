'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var styled = require('styled-components');
var theme = require('../../theme-a5004722.js');
var components_Button_index = require('../Button/index.js');
var utils = require('../../utils-e99f2d3c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var RefreshButtonContainer = styled__default['default'](components_Button_index.Button).withConfig({
  displayName: "RefreshButton__RefreshButtonContainer",
  componentId: "sc-1w68zc8-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  position: absolute;\n  right: 20px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background-color: ", ";\n  background-size: cover;\n  font-size: 14px;\n  color: ", ";\n  text-align: center;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: none;\n  outline: none;\n  i {\n    margin-right: 4px;\n  }\n  @media (max-width: 600px) {\n    width: auto;\n    i {\n      margin: auto;\n    }\n    span {\n      display: none;\n    }\n  }\n"], ["\n  position: absolute;\n  right: 20px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  background-color: ", ";\n  background-size: cover;\n  font-size: 14px;\n  color: ", ";\n  text-align: center;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: none;\n  outline: none;\n  i {\n    margin-right: 4px;\n  }\n  @media (max-width: 600px) {\n    width: auto;\n    i {\n      margin: auto;\n    }\n    span {\n      display: none;\n    }\n  }\n"])), theme.theme.grey, theme.theme.grey20, theme.theme.grey100);
var RefreshButton = function RefreshButton(_a) {
  var load = _a.load,
      loading = _a.loading,
      testId = _a.testId;
  return /*#__PURE__*/React__default['default'].createElement(RefreshButtonContainer, _tslib.__assign({}, utils.mapTestIdToProps(testId), {
    variant: "secondary",
    onClick: load
  }), /*#__PURE__*/React__default['default'].createElement("i", {
    className: loading ? 'fa fa-spinner' : 'fa fa-refresh'
  }), /*#__PURE__*/React__default['default'].createElement("span", null, "\xA0Refresh"));
};
var templateObject_1;

exports.RefreshButton = RefreshButton;
