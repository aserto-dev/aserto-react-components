'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var styled = require('styled-components');
var theme = require('../../theme-a5004722.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Hr = styled__default['default'].hr.withConfig({
  displayName: "Divider__Hr",
  componentId: "sc-10k26ii-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  border-top-color: ", ";\n  width: 100vw;\n  margin-bottom: 0px;\n"], ["\n  border-top-color: ", ";\n  width: 100vw;\n  margin-bottom: 0px;\n"])), theme.theme.grey20);
var Divider = function Divider(_a) {
  var marginBottom = _a.marginBottom;
  return /*#__PURE__*/React__default['default'].createElement(Hr, {
    style: {
      marginBottom: marginBottom
    }
  });
};
var templateObject_1;

exports.Divider = Divider;
